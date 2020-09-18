// -------------------------------------
//  Videos
// -------------------------------------
const config = require('../config.js');
const { src, dest, task } = require('gulp');

function video() {
  return src(`${config.src.video}**/*.*`)
    .pipe(dest(`${config[process.env.NODE_ENV].root}${config.dist.video}`));
}

task(video);

module.exports = video;