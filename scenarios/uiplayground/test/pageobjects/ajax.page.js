

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AjaxPage extends Page {
    /**
     * define selectors using getter methods
     */
    get ajaxButton () {
        return $('#ajaxButton');
    }

    get message () {
        return $$('p[class="bg-success"]');
    }

    get spinner () {
        return $('i#spinner');
    }    

    get messageText () {
        return $('#content p');
    }

    async clickAjaxRequestButton() {
        await this.ajaxButton.click();
        // Wait for the spinner element to disappear
        try {
        await this.spinner.waitForDisplayed({ reverse: true });
        } catch (e) {
            // Handle the timeout error
            console.error('Spinner did not disappear within the time.');
        }
        
    }

    async verifyMessage () {
        await (await this.messageText).waitForDisplayed();
        const messageContent = await this.messageText.getText();
        expect(messageContent).toBe('Data loaded with AJAX get request.');
    }

    async getNumberOfMessageDisplayed () {
        return this.message.length;
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open (path) {
        return super.open(path);
    }
}

export default new AjaxPage();
