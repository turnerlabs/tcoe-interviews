import { config } from "./wdio.shared.conf";

//
// ======
// Appium & image compare services
// ======
//
config.services = (config.services ? config.services : []).concat([
    [
        "appium",
        {
            // This will use the globally installed version of Appium
            command: "appium",
            args: {
                // This is needed to tell Appium that we can execute local ADB commands
                // and to automatically download the latest version of ChromeDriver
                relaxedSecurity: true,
                address: "localhost",
                // Write the Appium logs to a file in the root of the directory
                log: "./appium.log",
            },
        },
    ],['native-app-compare',{ baselineFolder: './test/resources/image-baseline',
    screenshotPath: './test/resources/image-compare',
    autoSaveBaseline: true,
    ignoreNothing: true }],
]);
//
// =====================
// Server Configurations
// =====================
//
config.port = 4723;

export default config;
