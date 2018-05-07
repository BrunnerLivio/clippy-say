const electron = require('electron');
const argv = require('minimist')(electron.remote.process.argv.slice(2));

const speak = argv.s || argv.speak;

const clippy = require('clippyjs');
clippy.load(argv._[0], agent => {
    agent.show();
    if(speak) {
        agent.speak(speak);
    }
});