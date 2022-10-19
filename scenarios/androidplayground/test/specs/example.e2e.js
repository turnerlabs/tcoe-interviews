/** @format */

import HomeScreen from '../../page-objects/mobile/home.screen.js';
import * as Constants from '../constants.js';
import 'mocha-cakes-2';

beforeEachFeature('Startup', async () => {
	require('expect-webdriverio').setOptions({ wait: 5000, interval: 100 });
	await driver.launchApp();
});
afterEachFeature('Cleanup', async () => {
	driver.terminateApp();
});
Feature('HomeScreen feature', async () => {
	Scenario('Validate that home screen is displayed', async () => {
		When('I am on the home screen page', async () => {
            await expect(HomeScreen.selectedTopNews).toBeDisplayed();
        });
        And('I navigate to the profile tab', async () => {
            await MenuTab.menuSettings.click();
            await ProfileScreen.cnnLogin.waitForDisplayed({
                timeout: Constants.DEFAULT_TIMEOUT,
            });
        });
        Then('I Login to CNN account', async () => {
            await ProfileScreen.cnnLogin.click();
            await AccountLoginScreen.loginAccount(
                process.env.ANDROID_EMAIL,
                process.env.ANDROID_PASSWORD
            );
        });
	});
});
