require("dotenv").config();
const { config } = require("./wdio.shared.conf");
const { baseUrl } = require("../scenarios/uiplayground/test/utilities/constants");
const ENV = process.env.ENV;
const LOG_LEVEL = process.env.LOG_LEVEL;

if (!ENV || !("qa", "dev", "staging", "prod").includes(ENV.toLowerCase())) {
  console.log(
    "Please use the following format when running the test script: ENV=qa|dev|staging|prod"
  );
  process.exit();
}

// ============
// Specs
// ============
config.specs = ["./scenarios/uiplayground/test/specs/**/*.js"];

// ============
// Capabilities
// ============
config.capabilities = [
  {
    maxInstances: LOG_LEVEL === "debug" ? 1 : 5,
    browserName: "chrome",
    acceptInsecureCerts: true,
  },
];

// ===================
// Test Configurations
// ===================
config.services = ["chromedriver"];
config.baseUrl = baseUrl[ENV];

// =====
// Hooks
// =====
config.before = async () => {
  await browser.maximizeWindow();
  await browser.setTimeout({
    pageLoad: 15000,
  });
};

exports.config = config;
