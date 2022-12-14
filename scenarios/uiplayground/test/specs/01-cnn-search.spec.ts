import { expect } from 'expect-webdriverio'
import cnnPage from '../pageobjects/cnn.page.js'

describe('CNN Search', async () => {

    beforeEach(async function () {
        await cnnPage.open('')
    });

    it('check search with results', async () => {
        await cnnPage.search('quality')
        await expect(cnnPage.resultsCount).toHaveTextContaining('Displaying')
        await expect(cnnPage.results).toBeElementsArrayOfSize({ gte: 1 })
    })

    it('check search WITHOUT results', async () => {
        await cnnPage.search('voidsearch')
        await expect(cnnPage.msgNoResults).toBeDisplayed()
    })

})
