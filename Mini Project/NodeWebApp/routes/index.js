var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ministerial_db'
})
connection.connect(function(err){
  if(err)
  {
    console.log('Connection Error');
  
  }else{
    console.log('DB Connected');
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('master');
});

router.get('/master', function(req, res, next) {
  res.render('master');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});




// Insert details into Database
router.post('/form-process', function(req, res, next){
  console.log(req.body);

  const mybodydata = {
    usr_name : req.body.uname,
    usr_phonenum : req.body.pnumber,
    usr_email : req.body.mail,
    
  }
  connection.query('insert into tbl_contact set ?',mybodydata, function(err,result){
    if(err) throw err;
    res.render('recorded');
  });
});

module.exports = router;
