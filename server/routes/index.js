var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', function(req, res, next){
  res.render('index', {name: req.body.email});
  console.log(req.body.email);
  res.redirect('/success');
  res.render('success', {success: 'success'})
});





module.exports = router;
