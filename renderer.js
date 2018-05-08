const electron = require('electron');
const argv = require('minimist')(electron.remote.process.argv.slice(2));

const character = argv.c || argv.character || 'Clippy';
const animations = argv.a || argv.animation;

const jquery = require('jquery');
const clippy = require('clippyjs');

function playAnimation(agent, animationCount) {
    if(animationCount < animations.length) {
        agent.play(animations[animationCount], undefined, () => playAnimation(agent, animationCount + 1));
    }
}


clippy.load(character, agent => {
    agent._startDrag = () => {};
    agent.show();
    agent.moveTo(0,0,0);
    agent.speak(...argv._);
    playAnimation(agent, 0);
});
