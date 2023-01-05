exports.config = {
    runner: 'local',
    specs: [
        './scenarios/uiplayground/test/specs/**.js'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['headless', 'disable-gpu', '--window-size=1280,800', '--no-sandbox']
        },
        acceptInsecureCerts: true,
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.cnn.com/',
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    specFileRetries: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 100000
    },
}
