class Gestures {

    static get windowSize() { return driver.getWindowRect(); }


    static async swipeUp() {
        const width = (await this.windowSize).width;
        const height = (await this.windowSize).height;

        const x = width / 2;
        const yFrom = 3 * height / 4;
        const yTo = height / 4;
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: x, y: yFrom },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 100 },
                    { type: 'pointerMove', duration: 1000, x: x, y: yTo },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);

    }
}

module.exports = Gestures;