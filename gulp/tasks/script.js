// -------------------------------------
//  Script
// -------------------------------------
const config = require('../config.js');
const { src, dest, task } = require('gulp');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
const gulpFilter = require('gulp-filter');

const filter = gulpFilter(`!${config.src.script}libs/**/*`, { restore: true });

function script() {
  return src(`${config.src.script}**/*.js`)
    .pipe(filter)
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(filter.restore)
    .pipe(dest(`${config[process.env.NODE_ENV].root}${config.dist.script}`))
    .pipe(browserSync.stream());
}

task(script);

module.exports = script;
