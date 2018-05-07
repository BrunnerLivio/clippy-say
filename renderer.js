const electron = require('electron');
var argv = require('minimist')(electron.remote.process.argv.slice(2));
const type = argv._[0] || 'Clippy';
const clippy = require('clippyjs');
const agent = clippy.load(type, agent => {
    agent.show();
    if (argv._[1]) {
        agent.speak(argv._[1]);
    }
});