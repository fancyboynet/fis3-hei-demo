var $ = require('jquery/jquery');
var red = require('app/red/red');

$(function(){
    $('img').attr('src', $('img').attr('data-src'));
    red($('h1'));
});