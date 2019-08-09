var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home', menuId: 'home' });
});

router.get('/privacy', function(req, res, next) {
  res.render('privacy', { page: 'privacy', menuId: 'privacy' });
});

router.get('/terms', function(req, res, next) {
  res.render('terms', { page: 'terms', menuId: 'terms' });
});


module.exports = router;
