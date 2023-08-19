/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'codeceptjs_teste'
}