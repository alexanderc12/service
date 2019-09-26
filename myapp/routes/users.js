var express = require('express');
var router = express.Router();

//10.4.75.200:3000

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({'text':'hola'});
});

module.exports = router;
