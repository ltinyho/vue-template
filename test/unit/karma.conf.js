// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function (karma) {
  karma.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers         : ['Chrome','Safari','Firefox'],
    frameworks       : ['mocha', 'sinon-chai', 'phantomjs-shim'],
    reporters        : ['spec', 'coverage'],
    files            : ['./index.js'],
    preprocessors    : {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack          : webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
// Code Coverage options. report type available:
//- html (default)
//- lcov (lcov and html)
//- lcovonly
//- text (standard output)
//- text-summary (standard output)
//- cobertura (xml format supported by Jenkins)
    coverageReporter: {
      dir      : './coverage',
      reporters: [
        {type: 'lcov', subdir: '.'},
        {type: 'text-summary'}
      ]
    },

    // level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: karma.LOG_DEBUG,

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
    // true: 自动运行测试并退出
    // false: 监控文件持续测试
    singleRun       : true,
    port            : 1234,
    colors          : true,
    autoWatch       : true,
    // If browser does not capture in given timeout [ms], kill it
    captureTimeout  : 6000,
  })
}
