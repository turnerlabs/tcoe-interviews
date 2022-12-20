module.exports = class Gestures {
    static async doSwipeUp() {
      driver.touchPerform([
        { action: 'press', options: { x: 540, y: 897 }},
        { action: 'wait', options: { ms: 100 }},
        { action: 'moveTo', options: { x: 540, y: 50 }},
        { action: 'release' }
      ]);
    }
  };