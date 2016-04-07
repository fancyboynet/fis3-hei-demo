"use strict";
let shell = require('shelljs');
let chalk = require('chalk');
let config = require('./config.json');


if (!shell.which('fis3')) {
    console.log(chalk.red('请先安装fis3'));
    return;
}

if (shell.test('-d', '../output')) {
    shell.rm('-rf', '../output/*');
}
shell.exec('fis3 server stop -p ' + config.port);
shell.exec('fis3 server start --root ../output -p ' + config.port);
shell.exec('fis3 release -wLcd ../output');

