exports.config = {
    
    runner: 'local',
    
    specs: [
        './scenarios/uiplayground/test/specs/*.js'
    ],
    
    exclude: [
        './scenarios/uiplayground/test/specs/example.e2e.js'
    ],
    
    maxInstances: 2,
    
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    
    logLevel: 'info',

    bail: 0,
    
    baseUrl: 'http://uitestingplayground.com/',
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    services: ['chromedriver'],
    
    framework: 'mocha',
    
    specFileRetries: 1,
    
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    beforeSuite: function (suite) {
        browser.maximizeWindow();
    },
}
