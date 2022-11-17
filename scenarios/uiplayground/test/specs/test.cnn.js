const CNNPage = require('../pageobjects/cnn.page');

/**
 * UI Challenge 2 - Test Spec 1
 */
describe('My CNN Search', () => {
    it('should search correctly with valid criteria', async () => {
        await CNNPage.openCNN();

        await CNNPage.search('Hello, World!');
        await expect(CNNPage.textSearch).toBeExisting();
        await expect(CNNPage.textSearch).toHaveTextContaining('Hello, World!');
    },);
});

/**
 * UI Challenge 2 - Test Spec 2
 */
 describe('My CNN Video Play', () => {
    it('should play correctly inside player', async () => {
        await CNNPage.openCNNVideos();

        await CNNPage.playVideo();
        await expect(CNNPage.titlePauseVideo).toBeExisting();
        await expect(CNNPage.titlePauseVideo).toHaveTextContaining('Pause');

        await CNNPage.pauseVideo();
        await expect(CNNPage.titlePlayVideo).toBeExisting();
        await expect(CNNPage.titlePlayVideo).toHaveTextContaining('Play');
    
        await CNNPage.playSuggestedVideo();
        await expect(CNNPage.titlePauseVideo).toBeExisting();
        await expect(CNNPage.titlePauseVideo).toHaveTextContaining('Pause');
    },);
});

/**
 * UI Challenge 2 - Test Spec 3
 */
 describe('My CNN Gallery', () => {
    it('should show images and display them correctly', async () => {
        await CNNPage.openCNNGallery(); // Open gallery page and verify correct header
        await expect(CNNPage.pageHeader).toBeExisting();
        await expect(CNNPage.pageHeader).toHaveTextContaining('The best Christmas markets in the world');

        await expect(CNNPage.imgContainer).toBeExisting(); // Verify image present
        await expect(CNNPage.imgCount).toHaveTextContaining('1'); // Verify we are on first image

        await CNNPage.clickNextImage();
        await expect(CNNPage.imgContainer).toBeExisting(); // Verify image present
        await expect(CNNPage.imgCount).toHaveTextContaining('2'); // Verify we are now on second image
    },);
});