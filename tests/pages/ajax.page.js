class AjaxPage {
  get ajaxButton() {
    return $("#ajaxButton");
  }
  get spinner() {
    return $("#spinner");
  }
  get successLabel() {
    return $$(".bg-success");
  }

  async clickButtonManyTimes(times) {
    for (let i = 0; i < times; i++) {
      await this.ajaxButton.click();
      await this.spinner.waitUntil(
        async function () {
          return (await this.isDisplayed()) === true;
        },
        {
          timeout: 10000,
          timeoutMsg: "Spinner not displayed",
        }
      );
      await this.spinner.waitUntil(
        async function () {
          return (await this.isDisplayed()) === false;
        },
        {
          timeout: 16000,
          timeoutMsg: "Spinner still displayed",
        }
      );
    }
  }
}

module.exports = new AjaxPage();
