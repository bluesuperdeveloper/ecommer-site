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
			var insertQuery = "INSERT INTO users (uid, email, type, password, created, token) VALUES (?, ?, ?, ?, ?)";
			connection.query(insertQuery, [newID, email, type, password, curTimeStamp, newToken], (err, results)=>{

				if(err){
					res.json({
						msg: err
					})
				}else{
					res.json({
						msg: 'userInserted',
						token: newToken,
						name: name
					})
				}
			})
		});
	}).catch((error)=>{
		re.json(error);
	})
});

router.post('/login', (req, res)=>{
	const email = req.body.email;
	const password = req.body.password;
	var checkHash;
	const checkEmail = new Promise((resolve, reject)=>{
		var checkLoginQuery = "SELECT * FROM users WHERE email = ?";
		connection.query(checkLoginQuery, [email], (error, results)=>{
			if (error) throw error;
			if(results.length === 0){
				reject({msg:'emailNotExists'});
			}else{
				checkHash = bcrypt.compareSync(password, results[0].password);
				resolve();
			}
		})
	});
	checkEmail.then(()=>{
		if(checkHash){
			const updateToken = 'UPDATE users SET token=?, token_exp=DATE_ADD(NOW(), INTERVAL 1 HOUR)';
			var token = randToken.uid(40);
			connection.query(updateToken, [token], (err, res)=>{
				res.json({
					msg: 'loginSuccess',
					token:token
				})
			})
		}else{
			res.json({msg:'wrongPassword'});
		}
	}).catch((error)=>{
		console.log(error);
		res.json(error);
	})
})
module.exports = router;
