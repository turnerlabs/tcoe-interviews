const expect = require('chai').expect

const Page = require("./page")

class ClickPage extends Page {

    get button() {
        return $("#badButton")
    }
    async open() {
        await super.open("click")
    }

    async clickButton() {
        await browser.waitAndClick(this.button)
    }

    async waitColorChange() {
        const blueColor = await this.button.getCSSProperty('background-color')
        await this.button.waitUntil(async function () {
            const backgroundColor = await this.getCSSProperty('background-color')
            return backgroundColor.parsed.hex[1] !== "0"
        }, {
            timeoutMsg: 'expected button color change'
        });
    }

    async verifyColor() {
        const backgroundColor = await this.button.getCSSProperty('background-color')
        return backgroundColor.parsed.hex

    }

    async getRedColor() {
        const colorRed = await browser.execute(async () => {
            try {
                var style = getComputedStyle(document.body)
                return style.getPropertyValue('--red')
            }
            catch (error) {
                return "Invalid Request"
            }
        })
        return colorRed
    }

}

module.exports = new ClickPage