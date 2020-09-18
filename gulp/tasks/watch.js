// -------------------------------------
//  Watch
// -------------------------------------
const config = require('../config.js');
const { watch } = require('gulp');
const style = require('./style.js');
const view = require('./view.js');
const script = require('./script.js');
const image = require('./image.js');

function watcher(done) {
  watch(`${config.src.style}**/*.scss`).on('change', style);
  watch(`${config.src.view}**/*.pug`).on('change', view);
  watch(`${config.src.script}**/*.js`).on('change', script);
  watch(`${config.src.image}**/*.{gif,jpg,jpeg,png,svg}`, image);
}

module.exports = watcher;
