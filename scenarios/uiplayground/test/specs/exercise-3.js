<<<<<<< HEAD
describe ('Ex 3', () => {
    it('validate that table exist', async () => {
    await browser.url('http://uitestingplayground.com/dynamictable');
    var isVisible = browser.isVisible('aria/Tasks');
        console.log(isVisible);
    });
    it('validate the table columns', async () => {
        await browser.url('http://uitestingplayground.com/dynamictable');
        let elem = await $('aria/Tasks ')
            let isExisting = await elem.isExisting()
            console.log(isExisting);
        });
=======
describe ('Ex 3', () => {
    it('validate that table exist', async () => {
    await browser.url('http://uitestingplayground.com/dynamictable');
    var isVisible = browser.isVisible('aria/Tasks');
        console.log(isVisible);
    });
    it('validate the table columns', async () => {
        await browser.url('http://uitestingplayground.com/dynamictable');
        let elem = await $('aria/Tasks ')
            let isExisting = await elem.isExisting()
            console.log(isExisting);
        });
>>>>>>> origin/main
    });