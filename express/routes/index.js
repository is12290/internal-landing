var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home', menuId: 'home' });
});

router.get('/privacy', function(req, res, next) {
  res.render('privacy', { page: 'privacy', menuId: 'privacy' });
});

router.get('/data-processing-addendum', function(req, res, next) {
  res.render('data-processing-addendum', { page: 'data-processing-addendum', menuId: 'data-processing-addendum' });
});

router.get('/terms', function(req, res, next) {
  res.render('terms', { page: 'terms', menuId: 'terms' });
});

router.get('/success-checkout', function(req, res, next) {
  res.render('success-checkout', { page: 'success-checkout', menuId: 'success-checkout' });
});

router.get('/error-checkout', function(req, res, next) {
  res.render('error-checkout', { page: 'error-checkout', menuId: 'error-checkout' });
});

router.get('/sike', function(req, res, next) {
  res.render('sike', { page: 'sike', menuId: 'sike' });
});

router.get('/form-submission', function(req, res, next) {
  res.render('form-submission', { page: 'form-submission', menuId: 'form-submission' });
});

router.get('/whoops', function(req, res, next) {
  res.render('whoops', { page: 'whoops', menuId: 'whoops' });
});


module.exports = router;
