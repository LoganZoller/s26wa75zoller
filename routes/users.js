var express = require('express');
var router = express.Router();
var vOne = 10
var vTwo = 15

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (vTwo > vOne) {
    vTwo = vTwo - vOne
  }
  else {
    vOne = vOne - vTwo
  }
  res.send('Values are: ' + vOne + 'and ' + vTwo);
});

module.exports = router;
