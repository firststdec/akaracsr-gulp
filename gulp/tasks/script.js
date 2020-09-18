// -------------------------------------
//  Script
// -------------------------------------
const config = require('../config.js');
const { src, dest, task } = require('gulp');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
const plumberNoti = require('gulp-plumber-notifier');

function script() {
  src(`${config.src.script}libs/**/*`)
    .pipe(plumberNoti())
    .pipe(
      dest(`${config[process.env.NODE_ENV].root}${config.dist.script}libs`)
    );

  return src([
    `${config.src.script}**/*.js`,
    `!${config.src.script}libs/**/*.js`,
  ])
    .pipe(plumberNoti())
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(dest(`${config[process.env.NODE_ENV].root}${config.dist.script}`))
    .pipe(browserSync.stream());
}

task(script);

module.exports = script;
