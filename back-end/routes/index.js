var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config');

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

module.exports = router;
