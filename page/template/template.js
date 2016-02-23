var $ = require('jquery/jquery');
$(function(){
    $('img').attr('src', $('img').attr('data-src'));
});