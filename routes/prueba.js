var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/prueba', function(req, res, next) {
  res.render('index', { title: 'Esto es una prueba' });
});

module.exports = router;