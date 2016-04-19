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

router.get('/inventory/:id', function(req, res) {
  Inventory.findById(req.params.id, function(err, invIdItems) {
    if(err) {
      console.log(err);
    } else {
      res.render('inventory/inventoryItem', {invItems: invIdItems})
    }
  });
})

module.exports = router;
