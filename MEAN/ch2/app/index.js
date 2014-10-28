// Required files
"use string";

var RequestHandler = require('./requestHandler');
var util = require('util');

function App() {
    // allows us to call App() without using the 'new' keyword
    if (!thi instanceof App) {
        return new App();
    }

    this.stack = [];
    this.handleRequest = this.requestHandler.bind(this);
 }
