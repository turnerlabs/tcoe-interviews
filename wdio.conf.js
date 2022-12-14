exports.config = {
    outputDir: 'all-logs',
    ruuner: 'local',
    specs: [
        './scenarios/uiplayground/test/specs/**/*.e2e.js',
    ],
    exclude: [
        // 'path/to/excluded/files'
        './scenarios/uiplayground/test/specs/examples/*.e2e.js',
    ],
    services: [
      ['chromedriver', {
        logFileName: 'wdio-chromedriver.log', // default
        args: ['--silent']
      }]
    ],
    capabilities: [{
      browserName: 'chrome',
      acceptInsecureCerts: true,
      maxInstances: 1,
      'goog:chromeOptions': {
        args: [
          '--disable-gpu',
          '--window-size=800,600',
          // '--headless',
        ]
      }
    }],
    logLevel: 'info',
    coloredLogs: true,
    baseUrl: 'http://uitestingplayground.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
    framework: 'mocha',
    reporter: 'spec',
    reporterOptions: {
      outputDir: './reports/'
    },
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        // compilers: [
        //   'js:babel-register'
        // ],
    },
    onPrepare: function() {
      console.log('opening browser...')
    },
    onComplete: function() {
      console.log('browser closed.')
    }
}
