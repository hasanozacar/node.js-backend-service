var express = require('express');
var router = express.Router();
const mockData = require('../utils/mockData.json')


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(200).json(mockData)
})

module.exports = router;
