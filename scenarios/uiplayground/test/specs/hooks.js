class hooks {
    openHomePage() {
      browser.url("http://uitestingplayground.com/");
      console.log("Navigating to Url 'http://uitestingplayground.com/'");
    }
  }
  module.exports = new hooks();