describe ('Exercice 2 positive', () => {
    it('Validate empty credentials', async () => {
    await browser.url('http://uitestingplayground.com/sampleapp');
    const loginButton =  await $('#login');
    await loginButton.click();
    await browser.waitUntil(
                async () => (await $('#loginstatus').getText()) === 'Invalid username/password');
                console.log("Empty Credentials Validated");
    });
    });

describe ('Exercice 2 positive', () => {
    it('Validate Wrong credentials', async () => {
                await browser.url('http://uitestingplayground.com/sampleapp');
                const loginButton = $('#login');
                const userInput = $('[name="UserName"]');
                const pwdInput = $('[name="Password"]');
                await userInput.setValue('WrongUser');
                await pwdInput.setValue('WrongPwd')
                await loginButton.click();
                await browser.waitUntil(
                        async () => (await $('#loginstatus').getText()) === 'Invalid username/password');
                        console.log("Wrong Credentials Validated");
            });
            });

describe ('Exercice 2 positive', () => {
    it('Validate Valid credentials, welcome message and log-out', async () => {
                    await browser.url('http://uitestingplayground.com/sampleapp');
                    const loginButton = $('#login');
                    const userInput = $('[name="UserName"]');
                    const pwdInput = $('[name="Password"]');
                    await userInput.setValue('CorrectUser');
                    await pwdInput.setValue('pwd')
                    await loginButton.click();
                    await browser.waitUntil(
                            async () => (await $('#loginstatus').getText()) === 'Welcome, '+userInput.getValue+'!');
                    console.log("Valid Credentials Validated");
                    await loginButton.click();
                    await browser.waitUntil(
                             async () => (await $('#loginstatus').getText()) === 'User logged out.');
                    console.log("User Logged out");
                });
            });

describe ('Exercice 2 positive', () => {
    it('Validate wrong type credentials', async () => {
                await browser.url('http://uitestingplayground.com/sampleapp');
                const loginButton = $('#login');
                const userInput = $('[name="UserName"]');
                const pwdInput = $('[name="Password"]');
                await userInput.setValue('123');
                await pwdInput.setValue('123')
                await loginButton.click();
                await browser.waitUntil(
                        async () => (await $('#loginstatus').getText()) === 'Invalid username/password');
                        console.log("Invalid Credentials Validated");
            });
            });