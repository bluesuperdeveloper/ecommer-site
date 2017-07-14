var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config');
var bcrypt = require('bcrypt-nodejs');
var randToken = require('rand-token');

var connection = mysql.createConnection({
	host: config.host,
	user:config.user,
	password:config.password,
	database:config.database
});

connection.connect();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/productlines/get', function(req,res){
	const selectQuery = "SELECT * FROM productlines";
	connection.query(selectQuery, (err, results)=>{
		if(err){
			res.json({msg: err});
		}else{
			console.log(results);
			res.json(results);
		};
	});
});

router.post('/register', function(req,res){
	const name = req.body.name;
	const email = req.body.email;
	const password = bcrypt.hashSync(req.body.password);
	const type = req.body.type;
	const city = req.body.city;
	const state = req.body.state;
	const salesrep = req.body.salesrep;
	// console.log(req.body);
	const checkEmail = new Promise((resolve, reject)=>{
		var selectQuery = "SELECT * FROM users WHERE email =?";
		connection.query(selectQuery, [email], (err, results)=>{
			if(err) throw err;
			if(results.length > 0){
					reject({msg:"existedUser"});
			}else{
				resolve();
			}

		})
	})

	checkEmail.then(()=>{
		var customerInsertQuery = "INSERT INTO customers (customerName, city, state) VALUES (?, ?, ?)";
		connection.query(customerInsertQuery, [name, city, state], (error, results)=>{
			// console.log(results);
			const newID = results.insertId;
			const newToken = randToken.uid(40);
			const curTimeStamp = Date.now() / 1000
			var insertQuery = "INSERT INTO users(uid, email, type, password, created, token) VALUES (?, ?, ?, ?, ?)";
			connection.query(insertQuery, [newID, email, type, password, curTimeStamp, newToken], (err, results)=>{
				console.log(results);
				if(err){
					res.json({
						msg: err
					})
				}else{
					res.json({
						msg: 'userInserted',
						token: newToken
					})
				}
			})
		});
	}).catch((error)=>{
		re.json(error);
	})


});
module.exports = router;
