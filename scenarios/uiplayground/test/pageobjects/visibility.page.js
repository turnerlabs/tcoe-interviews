

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VisibilityPage extends Page {
    /**
     * define selectors using getter methods
     */
    get hideButton () {
        return $('button#hideButton');
    }

    get removedButton () {
        return $('button#removedButton');
    }

    get zeroWidthButton () {
        return $('button#zeroWidthButton');
    }

    get overlappedButton () {
        return $('button#overlappedButton');
    }

    get invisibleButton () {
        return $('button#invisibleButton');
    }

    get opacityButton () {
        return $('button#transparentButton');
    }

    get notdisplayedButton () {
        return $('button#notdisplayedButton');
    }

    get offscreenButton () {
        return $('button#offscreenButton');
    }

    get unhideButton () {
        return $('button#unHide');
    }

    async clickHideButton() {
        await this.hideButton.click();
        await browser.pause(5000);
    }

    async verifyButtonsVisibility() {
        const buttons = [
            this.removedButton,
            this.zeroWidthButton,
            this.overlappedButton,
            this.opacityButton,
            this.invisibleButton,
            this.notdisplayedButton,
            this.offscreenButton
          ];
          let isButtonVisible;
          for (const button of buttons) {
            isButtonVisible = await button.isDisplayed();
          }
    }

    async verifyUnhideButtonVisible() {
        return await this.unhideButton.waitForDisplayed();
    }

    async verifyRemovedButtonDisplayed() {
        expect(await $('button#removedButton').isExisting()).toBe(false);
    }

    async verifyZeroWidthButtonDisplayed() {
        const elementWidth = await (await this.zeroWidthButton).getCSSProperty('width');
        // Assert that the width of the element is zero after clicking on hide button
        expect(elementWidth.value).toBe('0px');       
    }

    async verifyOpacityButtonDisplayed() {
        const elementOpacity = await (await this.opacityButton).getCSSProperty('opacity');
        // Assert that the opacity of the element is zero after clicking on hide button
        expect(elementOpacity.value).toBe(0); 
    }

    async verifyVisibilityHiddenButtonDisplayed() {
        const elementHidden = await (await this.invisibleButton).getCSSProperty('visibility');
        expect(elementHidden.value).toBe('hidden'); 
    }

    async verifyDisplayNoneButtonDisplayed() {
        const elementDisplay = await (await this.notdisplayedButton).getCSSProperty('display');
        expect(elementDisplay.value).toBe('none'); 
    }

    async verifyOffsetButtonDisplayed() {
        const leftValue = await (await this.offscreenButton).getCSSProperty('left');
        const rightValue = await (await this.offscreenButton).getCSSProperty('right');
        const topValue = await (await this.offscreenButton).getCSSProperty('top');
        const bottomValue = await (await this.offscreenButton).getCSSProperty('bottom');
        expect(leftValue.value).toBe('-9999px');
        expect(rightValue.value).toBe('11254.4px');
        expect(topValue.value).toBe('-9999px');
        expect(bottomValue.value).toBe('10573px');
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open (path) {
        return super.open(path);
    }
}

export default new VisibilityPage();
