

describe('validate test cases', () => {

    // Site Search Functionality 

    it('verify search', async() => {
        browser.url("https://www.cnn.com/")

        const search = await $(".sc-bdVaJa");
        // to check whether button is clickable

        await expect(search).toBeClickable()
        await search.click()
     
        const click = await $("#header-search-bar");

        await click.setValue("Narendra Modi")
        // to check input text contain Narendra Modi in it.
        await expect(click).toHaveValue('Narendra Modi', { ignoreCase: true })
        await browser.executeAsync((done) => {
                setTimeout(done, 2000);
            });
        const btn = await $(".JwELA");
        // to check whether button is clickable

        await expect(btn).toBeClickable()

        await btn.click();
        // to check whether url have Modi word in it.
        await expect(browser).toHaveUrlContaining('Modi')

    });

    // verify  video 

   it ('verify video ',async()=>{
        browser.url("https://edition.cnn.com/videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn");
        await expect(browser).toHaveUrlContaining('edition')
        
        const video= await $(".video-inline__video-resource");
        // to check whether button is clickable

       await expect(video).toBeClickable()
       await video.click()
       browser.pause(3000)
       await browser.executeAsync((done) => {
           setTimeout(done, 15000);
        });
        
     
        
    })
    it('verify related suggestion video', async() => {
        browser.url("https://edition.cnn.com/videos/business/2022/11/16/taylor-swift-concert-tour-presale-tickets-ticketmaster-cprog-cnntm-vpx.cnn");
        // to check whether url have edition word in it.
       
        await expect(browser).toHaveUrlContaining('edition')

        const video= await $(".video-inline__video-resource");
        // to check whether button is clickable

       await expect(video).toBeClickable()
        await video.click()
        await browser.executeAsync((done) => {
            setTimeout(done, 15000);
         });
         
         
        
    });

    // verify image


    it('image verifying', async () => {
        let a = 1;
        let i = 1;
        await browser.setWindowRect(0, 0, 1200, 800);
        await browser.url("http://edition.cnn.com/travel/gallery/top-christmas-markets/index.html")
        await expect(browser).toHaveUrlContaining('edition')
       
        const elem = await $('.Image__component');
        await elem.scrollIntoView();
        const next_image = await $(".GalleryHeroDecorators__next");
        do {
        // to check whether button is clickable

       await expect(next_image).toBeClickable()

            await next_image.click()
            await browser.executeAsync((done) => {
                setTimeout(done, 2000);
            });
            i++
        } while (i < 10)

        const prev_image = await $(".GalleryHeroDecorators__previous");
        do {
        // to check whether button is clickable

       await expect(prev_image).toBeClickable()

            await prev_image.click()
            await browser.executeAsync((done) => {
                setTimeout(done, 2000);
            });
            a++
        } while (a < 10)
       
    });
    });
