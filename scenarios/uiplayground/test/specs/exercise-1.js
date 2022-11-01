<<<<<<< HEAD
describe ('Ex 1', () => {
    it('wait for the progress bar to reach 75%', async () => {
    await browser.url('http://uitestingplayground.com/progressbar');
    const startButton = $('#startButton');
    const stopButton = $('#stopButton');
    await startButton.click();
    await browser.waitUntil(
            async () => (await $('#progressBar').getText()) === '75%',
            {
                        timeout: 15000
            }
        );
    await stopButton.click();
    await browser.pause(5000);
    });
    });

describe ('Ex 1.2', () => {
    it('hide button shows unhide', async () => {
    await browser.url('http://uitestingplayground.com/visibility');
    const hideButton = $('#hideButton');
    await hideButton.click();
    await browser.waitUntil(
            async () => (await hideButton.getText()) === 'unhide'
        );
    await stopButton.click();
    await browser.pause(5000);
    });
=======
describe ('Ex 1', () => {
    it('wait for the progress bar to reach 75%', async () => {
    await browser.url('http://uitestingplayground.com/progressbar');
    const startButton = $('#startButton');
    const stopButton = $('#stopButton');
    await startButton.click();
    await browser.waitUntil(
            async () => (await $('#progressBar').getText()) === '75%',
            {
                        timeout: 15000
            }
        );
    await stopButton.click();
    await browser.pause(5000);
    });
    });

describe ('Ex 1.2', () => {
    it('hide button shows unhide', async () => {
    await browser.url('http://uitestingplayground.com/visibility');
    const hideButton = $('#hideButton');
    await hideButton.click();
    await browser.waitUntil(
            async () => (await hideButton.getText()) === 'unhide'
        );
    await stopButton.click();
    await browser.pause(5000);
    });
>>>>>>> origin/main
    });