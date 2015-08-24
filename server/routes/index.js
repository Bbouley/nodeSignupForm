var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/success', function(req, res, next){
  res.render('success', {success: 'success'});
});

router.post('/submit', function(req, res, next){
  res.redirect('success', {success: 'success'});
  console.log(req.body.email);
});

module.exports = router;
