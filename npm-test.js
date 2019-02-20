// https://tonicdev.com/npm/recordrtc

var MultiStreamsMixer;

try {
    MultiStreamsMixer = require('multistreamsmixer');
}
catch(e) {
    MultiStreamsMixer = require('./MultiStreamsMixer.js');
}

const fakeMediaStream = {};

var mixer = new MultiStreamsMixer([ fakeMediaStream ]);
console.log('mixer: ', mixer);

process.exit()
