const LOG_LEVEL = process.env.LOG_LEVEL;

exports.config = {
  // ============
  // Capabilities
  // ============
  maxInstances: LOG_LEVEL === "debug" ? 1 : 5,

  // ===================
  // Test Configurations
  // ===================
  logLevel: LOG_LEVEL,
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 15000,
  connectionRetryCount: 5,
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: LOG_LEVEL === "debug" ? 24 * 60 * 60 * 1000 : 50000,
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
