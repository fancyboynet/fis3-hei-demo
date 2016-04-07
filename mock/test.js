"use strict";

module.exports = function(req, res, next) {

    res.write('Hello world2222 ');

    // set custom header.
    // res.setHeader('xxxx', 'xxx');

    res.end('The time is ' + Date.now());
};