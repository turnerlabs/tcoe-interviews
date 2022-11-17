import TabBar from '../screenobjects/components/TabBar';
import DragScreen from "../screenobjects/DragScreen";

/**
 * This test file verifies the form view behavior
 */
describe('WebdriverIO and Appium, when using swiping', () => {

    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openDrag();
        await DragScreen.waitForIsShown()

    });

    it('Drag an element into the right place', async () => {
        await DragScreen.dragC1.waitForDisplayed()
        await DragScreen.dragElementTo(DragScreen.dragC1, DragScreen.dropC1);
        await expect(await DragScreen.dropC1.isDisplayed() === false);
    });

});
