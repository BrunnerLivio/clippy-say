const electron = require('electron');
const argv = require('minimist')(electron.remote.process.argv.slice(2));

const character = argv.c || argv.character || 'Clippy';

const clippy = require('clippyjs');
clippy.load(character, agent => {
    agent.show();
    agent.speak(...argv._);
});