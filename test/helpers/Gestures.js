/**
 * Gestures Class
 */
class Gestures {
  async swipeVertical(percentage) {
    let screenSize = await driver.getWindowRect();
    driver.touchPerform([
      {
        action: "press",
        options: {
          x: screenSize.width * 0.5,
          y: screenSize.height * 0.5,
        },
      },
      { action: "wait", options: { ms: 100 } },
      {
        action: "moveTo",
        options: {
          x: screenSize.width * 0.5,
          y: screenSize.height * percentage,
        },
      },
      { action: "release" },
    ]);
  }
}

module.exports = new Gestures();
