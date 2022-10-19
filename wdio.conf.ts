//below 2 commands will import the env package and create a config method that loads all the keys from env and provide at the runtime
import dotenv from "dotenv";
dotenv.config();

//mport type { Options } from '@wdio/types'

//export const config: Options.Testrunner = {
var markdownReporter = require("wdio-markdown-reporter");
let { ReportAggregator, HtmlReporter } = require("wdio-html-nice-reporter");
let headless = process.env.HEADLESS;
let debug = process.env.DEBUG;
//console.log("the headless flag:" + headless);
//console.log("the debug flag:" + debug);
export const config: WebdriverIO.Config = {
  autoCompileOpts: {
    autoCompile: true,

    tsNodeOpts: {
      transpileOnly: true,
      project: "tsconfig.json",
    },
  },

  specs: ["./scenarios/uiplayground/test/features/**.feature"],
  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 5,

      browserName: "chrome",

      "goog:chromeOptions": {
        //https://peter.sh/experiments/chromium-command-line-switches/ -url for arguments
        //  args: ["--disable-web-security","--headless", "--no-sandbox", "--disable-dev-shm-usage", "--window-size=1920,1080", "--disable-gpu"]
        /*   args:
          headless.toUpperCase() === "TRUE"
            ? [
                "--headless",
                "--disable-web-security",
                "--no-sandbox",
                "--disable-dev-shm-usage",
              ]
            : [],*/
      },
      acceptInsecureCerts: true,
      timeouts: {
        implicit: 12000,
        pageLoad: 20000,
        script: 30000,
      },
    },
  ],

  logLevel: "error",
  // logLevel: 'info',
  // logLevel: debug.toUpperCase() === "TRUE" ? 'info' : 'error',

  bail: 0,

  baseUrl: "http://uitestingplayground.com/",
  //for genreal options
  //baseUrl:'https://the-internet.herokuapp.com',
  //for basic auth
  // baseUrl:'https://admin:admin@the-internet.herokuapp.com',

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ["chromedriver"],

  framework: "cucumber",

  // reporters: ["spec", ["allure", { outputDir: "allure-results" }]],

  //reporters: [[markdownReporter, { outputDir: "" }]],

  reporters: [
    "spec",
    [
      "html-nice",
      {
        outputDir: "./reports/html-reports/",
        filename: "report.html",
        reportTitle: "Test Report Title",
        linkScreenshots: true,
        showInBrowser: true,
        collapseTests: false,
        useOnAfterCommandForScreenshot: true,
      },
    ],
    [
      "allure",
      {
        outputDir: "./reports/allure-reports/",
        filename: "allure report.xml",
        reportTitle: "Test Report Title",
      },
    ],
  ],

  cucumberOpts: {
    require: ["./scenarios/uiplayground/test/stepdefintions/**.ts"],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: "@demo",
    timeout: 300000,
    ignoreUndefinedDefinitions: false,
  },

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: function (config, capabilities) {
    ReportAggregator = new ReportAggregator({
      outputDir: "./reports/html-reports/",
      filename: "master-report.html",
      reportTitle: "Master Report",
      //browserName: config.capabilities.browserName
    });
    ReportAggregator.clean();
  },
  /**
   * Gets executed before a worker process is spawned and can be used to initialise specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {String} cid      capability id (e.g 0-0)
   * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {[type]} specs    specs to be run in the worker process
   * @param  {[type]} args     object that will be merged with the main configuration once worker is initialized
   * @param  {[type]} execArgv list of string arguments passed to the worker process
   */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },
  /**
   * Gets executed just after a worker process has exited.
   * @param  {String} cid      capability id (e.g 0-0)
   * @param  {Number} exitCode 0 - success, 1 - fail
   * @param  {[type]} specs    specs to be run in the worker process
   * @param  {Number} retries  number of retries used
   */
  // onWorkerEnd: function (cid, exitCode, specs, retries) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   * @param {String} cid worker id (e.g. 0-0)
   */
  // beforeSession: function (config, capabilities, specs, cid) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {Object}         browser      instance of created browser/device session
   */
  // before: function (capabilities, specs) {
  // },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Cucumber Hooks
   *
   * Runs before a Cucumber Feature.
   * @param {String}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  // beforeFeature: function (uri, feature) {
  // },
  /**
   *
   * Runs before a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
   * @param {Object}                 context  Cucumber World object
   */
  beforeScenario: async function (world, context) {
   /* let cookies = await browser.getAllCookies();
    console.log("cookies:" + cookies);
    await browser.deleteAllCookies();
    console.log("deleted existing cookies");*/

    //console.log("world:" + await JSON.stringify(world));
    let arrstr = await world.pickle.name.split(/:/);
    console.log(arrstr)
    if (arrstr.length > 0) {
      //@ts-ignore
      browser.config.testid = arrstr[0];
    }
    //@ts-ignore
    if(!(browser.config.testid)) throw Error("Error getting testid for current scenario"+world.pickle.name);
    
  },
  /**
   *
   * Runs before a Cucumber Step.
   * @param {Pickle.IPickleStep} step     step data
   * @param {IPickle}            scenario scenario pickle
   * @param {Object}             context  Cucumber World object
   */
  beforeStep: function (step, scenario, context) {},
  /**
   *
   * Runs after a Cucumber Step.
   * @param {Pickle.IPickleStep} step             step data
   * @param {IPickle}            scenario         scenario pickle
   * @param {Object}             result           results object containing scenario results
   * @param {boolean}            result.passed    true if scenario has passed
   * @param {string}             result.error     error stack if scenario failed
   * @param {number}             result.duration  duration of scenario in milliseconds
   * @param {Object}             context          Cucumber World object
   */
  afterStep: async function (step, scenario, result, context) {
    // console.log("step:" + JSON.stringify(step));
    //console.log("scenario:"+JSON.stringify(scenario))
    //console.log("result:"+JSON.stringify(result))
    // console.log("context:"+JSON.stringify(context))
    await browser.takeScreenshot();
  },
  /**
   *
   * Runs after a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world            world object containing information on pickle and test step
   * @param {Object}                 result           results object containing scenario results
   * @param {boolean}                result.passed    true if scenario has passed
   * @param {string}                 result.error     error stack if scenario failed
   * @param {number}                 result.duration  duration of scenario in milliseconds
   * @param {Object}                 context          Cucumber World object
   */
  // afterScenario: function (world, result, context) {
  // },
  /**
   *
   * Runs after a Cucumber Feature.
   * @param {String}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  // afterFeature: function (uri, feature) {
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  onComplete: function (exitCode, config, capabilities, results) {
    (async () => {
      await ReportAggregator.createReport();
    })();
  },
  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  // onReload: function(oldSessionId, newSessionId) {
  // }
};
