var express = require('express');
var router = express.Router();

// Database mysql require
var mysql = require('mysql');
// Connection to database
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'crudDB'
});
// Check Wether DB connected or not
connection.connect(function(err){
  if(err){
    console.log('DB connection Error!!');
  }
  else{
    console.log('DB Connected.');
  }
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRUD Operation' });
});

// Product_add
router.get('/product_add', function(req, res, next) {
  res.render('product_add');
});

// Insert data into Database
router.post('/add-process', function(req, res, next){
  console.log(req.body);

  const mybodydata = {
    product_name : req.body.product_name,
    product_details : req.body.product_details,
    product_price : req.body.product_price,
    product_stock : req.body.product_stock,
  }
  connection.query('insert into tbl_product set ?',mybodydata, function(err,result){
    if(err) throw err;
    res.render('product_add');
  });
});

// Display data or get data from  database
router.get('/product_display', function(req, res, next) {
   connection.query('select * from tbl_product', function(err,db_rows){
       if(err) throw err;
      console.log(db_rows);
      res.render('product_display' ,{db_rows_arr:db_rows});
  });

});

// Delete Data From table
router.get('/delete/:id', function(req, res, next){
  var deleteid = req.params.id;
  console.log(deleteid);
  connection.query('delete from tbl_product where product_id = ?',[deleteid], function(err,db_rows){
    if(err) throw err;
    console.log(db_rows);
    res.redirect('/product_display');
  });
});

// Edit Data From table
router.get('/edit/:id', function(req, res, next){
  var editid = req.params.id;
  console.log(editid);
  connection.query('select * from tbl_product where product_id = ?',[editid], function(err,db_rows){
    if(err) throw err;
    console.log(db_rows);
    res.render('product_edit',{db_rows_arr:db_rows});
  });
});
// Post router to update data
router.post('/edit/:id', function(req, res, next){
  var editid = req.params.id;
  var pname= req.body.product_name;
  var pdetails= req.body.product_details;
  var pprice= req.body.product_price;
  var pstock= req.body.product_stock;

  connection.query('update tbl_product set product_name=?, product_details=?, product_price=?, product_stock=? where product_id = ?',[pname, pdetails, pprice, pstock, editid], function(err,db_rows){
    if(err) throw err;
    res.redirect('/product_display');
  });
});
module.exports = router;

