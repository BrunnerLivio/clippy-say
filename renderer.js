const electron = require('electron');
const jquery = require('jquery');
const clippy = require('clippyjs');

const argv = require('minimist')(electron.remote.process.argv.slice(2));

// Paramas
const character = argv.c || argv.character || 'Clippy';
const animations = argv.a || argv.animation;
let x = argv.x;
let y = argv.y;
const random = argv.r || argv.random;
const noHold = argv.nohold || false;

const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;

if (random) {
    x = Math.floor(Math.random() * width) + 0;
    y = Math.floor(Math.random() * height) + 0;
}

if (x && y) {
    electron.remote.getCurrentWindow().setPosition(x, y, false);
} else {
    electron.remote.getCurrentWindow().center()
}

function playAnimation(agent, animationCount) {
    if (animationCount < animations.length) {
        agent.play(animations[animationCount], undefined, () => playAnimation(agent, animationCount + 1));
    }
}


clippy.load(character, agent => {
    // Disable drag
    agent._startDrag = () => { };
    agent.show();
    agent.moveTo(0, 0, 0);
    if (argv._.length) agent.speak(...argv._, !noHold);
    if (animations.length) playAnimation(agent, 0);
});

