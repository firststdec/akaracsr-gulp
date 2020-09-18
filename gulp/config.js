// -------------------------------------
//  Config
// -------------------------------------
const config = {
  development: {
    root: './.dev/',
  },
  production: {
    root: './build/',
    option: {
      cssOutput: 'compressed',
      imgOptimize: true,
    },
  },
  src: {
    view: 'src/views/',
    style: 'src/styles/',
    script: 'src/scripts/',
    image: 'src/images/',
    video: 'src/videos/',
  },
  dist: {
    view: '',
    style: 'assets/css/',
    script: 'assets/js/',
    image: 'assets/images/',
    video: 'assets/video/',
  },
  format: {
    encode: 'utf8',
    eol: 'CRLF',
  },
};

module.exports = config;
