var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home', menuId: 'home' });
});

router.get('/privacy', function(req, res, next) {
  res.render('privacy', { page: 'privacy', menuId: 'privacy' });
});

router.get('/data-processing', function(req, res, next) {
  res.render('data-processing', { page: 'data-processing', menuId: 'data-processing' });
});

router.get('/terms', function(req, res, next) {
  res.render('terms', { page: 'terms', menuId: 'terms' });
});

router.get('/success', function(req, res, next) {
  res.render('success', { page: 'success', menuId: 'success' });
});

router.get('/error', function(req, res, next) {
  res.render('error', { page: 'error', menuId: 'error' });
});

router.get('/form-submitted', function(req, res, next) {
  res.render('contact-form', { page: 'contact-form', menuId: 'contact-form' });
});

router.get('/newsletter-success', function(req, res, next) {
  res.render('newsletter-form', { page: 'newsletter-form', menuId: 'newsletter-form' });
});

router.get('/blog/blog/manifesto', function(req, res, next) {
  res.render('manifesto', { page: 'manifesto', menuId: 'manifesto' });
});

module.exports = router;
