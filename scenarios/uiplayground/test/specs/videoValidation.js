const VideoPage = require('../pageobjects/video.page');
const CNNPage = require('../pageobjects/cnnPage');
const SearchPage = require('../pageobjects/search.page')

const videoPath = 'videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn';

describe('Search validation', () => {
    it('should perform a search successfully', async () => {
        await CNNPage.openCNNHome(videoPath);

        await VideoPage.assertVideoTitle(`'Happy Days' star calls himself a fool for turning down iconic role`)

    })
})


