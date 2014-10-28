// required files
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/TharnSocial', function() {
    console.log('mongo is connected!!!');
})

module.exports = mongoose
