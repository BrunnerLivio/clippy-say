#!/usr/bin/env node

const electron = require('electron')
const proc = require('child_process')
const argv = require('minimist')(process.argv.slice(2))
let params;

if(argv._.length) {
    params = Object.keys(argv).map(key => key === '_' ? argv[key] : `--${key} ${argv[key]}`).join(' ');
} else {
    // Default value
    params = 'Clippy';
}

proc.spawn(electron, ['.', ...params.split(' ') ]);