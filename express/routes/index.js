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

router.get('/form-submitted', function(req, res, next) {
  res.render('form-submitted', { page: 'form-submitted', menuId: 'form-submitted' });
});

router.get('/newsletter-success', function(req, res, next) {
  res.render('newsletter-success', { page: 'newsletter-success', menuId: 'newsletter-success' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { page: 'blog', menuId: 'blog' });
});

router.get('/schedule-demo', function(req, res, next) {
  res.render('schedule-demo', { page: 'schedule-demo', menuId: 'schedule-demo' });
});

module.exports = router;
