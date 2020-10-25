#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');

checkNode('10');

welcome({
    title: pkgJSON.name,
    version: pkgJSON.version,
    description: pkgJSON.description,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
})

console.log(`Hi! I'm vhosur!`);