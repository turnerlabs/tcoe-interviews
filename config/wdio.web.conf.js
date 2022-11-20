const { config } = require("./wdio.shared.conf");

// ============
// Specs
// ============
config.specs = ["./scenarios/uiplayground/test/specs/**/*.js"];

// ============
// Capabilities
// ============
config.capabilities = [
  {
    maxInstances: 5,
    browserName: "chrome",
    acceptInsecureCerts: true,
  },
];

// ===================
// Test Configurations
// ===================
config.services = ["chromedriver"];
config.baseUrl = "https://edition.cnn.com";

// =====
// Hooks
// =====
config.before = async () => {
  await browser.maximizeWindow();
  await browser.setTimeout({
    pageLoad: 12000,
  });
};

exports.config = config;
