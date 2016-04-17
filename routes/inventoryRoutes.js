var express   = require('express')
var router    = express.Router();
var Inventory = require('../models/inventoryModel');

router.get('/inventory', function(req, res) {
  res.render('inventory/inventory');
})

module.exports = router;
