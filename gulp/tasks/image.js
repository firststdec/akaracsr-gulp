// -------------------------------------
//  Images
// -------------------------------------
const config = require('../config.js');
const { src, dest, task } = require('gulp');

function image() {
  return src(`${config.src.image}**/*.{gif,jpg,jpeg,png,svg}`)
    .pipe(dest(`${config[process.env.NODE_ENV].root}${config.dist.image}`));
}

task(image);

module.exports = image;