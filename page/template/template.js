var $ = require('jquery');
var fastClick = require('fastclick');
var red = require('app/red/red');

$(function(){
    fastClick(document.body);
    $('img').attr('src', $('img').attr('data-src')).on('click', function () {
        alert(1);
    });
    red($('h1'));
});