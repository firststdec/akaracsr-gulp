const { series, parallel } = require('gulp');
const server = require('./gulp/tasks/server.js');
const watch = require('./gulp/tasks/watch.js');
const style = require('./gulp/tasks/style.js');
const script = require('./gulp/tasks/script.js');
const view = require('./gulp/tasks/view.js');
const image = require('./gulp/tasks/image.js');
const video = require('./gulp/tasks/video.js');
const clean = require('./gulp/tasks/clean.js');

module.exports = {
  default: series(clean, view, style, script, image, video, server, watch),
  build: series(clean, parallel(view, style, script, image, video))
};
