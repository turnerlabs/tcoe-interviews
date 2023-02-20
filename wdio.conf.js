exports.config = {
    specs: [
        './scenarios/uiplayground/test/specs/**/galery.functionality.js'
    ],
    suites: {
        cnn: [
            'scenarios/uiplayground/test/specs/cnn/*.js'
        ]
    },
    maxInstances: 1,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://www.cnn.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
