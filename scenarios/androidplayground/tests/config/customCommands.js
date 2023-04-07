const paltformKeymap = {
    web: "web",
    android: "android",
    ios: "ios",
};
browser.overwriteCommand("$", async ($, selector) => {
    let element;
    if (typeof selector == "string") {
        element = $(selector);
    } else {
        element = $(getSelectorByPlatform(selector));
    }
    return element;
});

browser.overwriteCommand("$$", async ($$, selector) => {
    let element;
    if (typeof selector == "string") {
        element = $$(selector);
    } else {
        element = $$(getSelectorByPlatform(selector));
    }
    return element;
});

/**
 * Gets platform sepecifc locator
 * @param {*} selector
 * 
 * 
 * @returns {string} Platfrom specific selector
 */

function getSelectorByPlatform(selector) {
    const platform = getPlatform();
    const paltformKey = validateAndGetPlatformKey(platform);
    return selector[paltformKey];
}

/**
 * Gets curret platform
 * 
 * 
 * @returns {string} platform
 */

function getPlatform() {

    if (!driver.isMobile) return "web";
    return driver.isIOS ? "ios" : "android";
}

/**
 * Check if platform sepcific selector set.
 * @param {string} platform
 * 
 * 
 * @returns {string} key
 */

function validateAndGetPlatformKey(platform) {

    const paltformKey = paltformKeymap[platform];
    
    if (!paltformKey) {
        throw new Error(`Selector is not set ${platform} platform`);
    }
    return paltformKey;
}
