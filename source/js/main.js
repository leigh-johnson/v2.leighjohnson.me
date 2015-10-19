window.$ = window.jQuery = require('jquery')
var bootstrap = require('bootstrap');
var fullpage = require('fullpage.js');

$(document).ready(function(){
    $('#fullpage').fullpage({
        navigation: true,
        navigationTooltips: ['Hi', 'Data-driven Designs'],
        verticalCentered: true
    });
});