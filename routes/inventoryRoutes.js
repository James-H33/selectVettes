var express   = require('express')
var router    = express.Router();
var Inventory = require('../models/inventoryModel');

// Iventory Routes
router.get('/inventory', function(req, res) {
  Inventory.find({}, function(err, invItem) {
    if(err) {
      console.log(err);
    } else {
      res.render('inventory/inventory', {items: invItem});
    }
  });
});

module.exports = router;
