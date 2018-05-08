#!/usr/bin/env node

const electron = require('electron')
const proc = require('child_process')
const argv = require('minimist')(process.argv.slice(2));

const characters = ['Merlin', 'Clippy', 'Rover', 'Links'];

let character = argv.c || argv.character || 'Clippy';
if(characters.indexOf(character) === -1) return console.error(`"${character}" is not a valid character. Use ${characters.join(', ')} instead`);

proc.spawn(electron, [__dirname, ...process.argv.slice(2)]);
