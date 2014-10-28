// required files
//@jsx React.DOM

var React = require('react');
var TweetsApp = require('./components/TweetsApp.react');

// snag the initial state that was passed by the server
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

// Render the components
React.renderComponent(
    <TweetsApp tweets={initalState}/>,
    document.getElementById('react-app')
);
