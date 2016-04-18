var mongoose = require('mongoose');
var Inventory = require('./models/inventoryModel');


var data = [
  {
    image: 'http://selectvettes.com/inventory/67%20GTO%20web1.jpg',
    year: '1967',
    make: 'Pontiac',
    model: 'GTO',
    color: 'Champagne / Black Interior',
    price: 'Contact Us'
  },
  {
    image: 'http://selectvettes.com/inventory/65%20vette%20web1.jpg',
    year: '1965',
    make: 'Chevrolet',
    model: 'Corvette',
    color: 'Red / White Interior',
    price: 'Contact Us'
  },
  {
    image: 'http://selectvettes.com/inventory/57%20tbirdweb1.jpg',
    year: '1957',
    make: 'Ford',
    model: 'Thunderbird',
    color: 'Black / White Interior',
    price: 'Contact Us'
  },
]

function seedDB() {
  Inventory.remove({}, function(err) {
    if(err) {
      console.log(err)
    } else {
      console.log('Inventory Removed');
      data.forEach(function(inv) {
        Inventory.create(inv, function(err, invItem){
          if (err) {
            console.log(err);
          } else {
            console.log('Item Created');
            invItem.save();
          }
        });
      });
    }
  });
}

module.exports = seedDB;
