const Page = require("./page");

class uiTests extends Page {
  get startButton() {
    return $("#startButton");
  }
  get stopButton() {
    return $("#stopButton");
  }
  get progressBar() {
    return $("#progressBar");
  }
  get ajaxButton() {
    return $("#ajaxButton");
  }
  get ajaxStatus() {
    return $$("#content > p");
  }
  get spinner() {
    return $("#spinner");
  }
  get hideButton() {
    return $("#hideButton");
  }
  get copyButton() {
    return $("#buttonCopy");
  }
  get badButton() {
    return $("#badButton");
  }

  openProgressPage() {
    return super.open("progressbar");
  }
  openAjaxPage() {
    return super.open("ajax");
  }
  openVisibilityPage() {
    return super.open("visibility");
  }
  openShadowDomPage() {
    return super.open("shadowdom");
  }
  openClickPage() {
    return super.open("click");
  }
}

module.exports = new uiTests();
