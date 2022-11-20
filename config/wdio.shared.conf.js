exports.config = {
  // ============
  // Capabilities
  // ============
  maxInstances: 5,

  // ===================
  // Test Configurations
  // ===================
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 12000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: 'bdd',
    timeout: 50000
},

  // =====
  // Hooks
  // =====
  afterTest: function (test, context, { error }) {
    if (error) {
      browser.takeScreenshot();
    }
  },
};
