"use strict";
let shell = require('shelljs');
let chalk = require('chalk');
let config = require('./config.json');

if (!shell.which('fis3')) {
    console.log(chalk.red('请先安装fis3'));
    return;
}

shell.rm('-rf', '../output' + config.static_root + '/*');
shell.rm('-rf', '../output/templates/*');
shell.exec('fis3 release prod -cd ../output');

// shell.cp('-rf', '../output/' + config.static_root + '/', '../../../static/' + config.static_root + '/');