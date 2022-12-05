class Utils {

    findAndroidElementByResourceId(resourceId) {
        return `android=new UiSelector().resourceId("${resourceId}")`;
    }

    findAndroidElementByDescription(description) {
        return `android=new UiSelector().description("${description}")`;
    }

    findAndroidElementByclassName(className) {
        return `android=new UiSelector().className("${className}")`;
    }

    getRandomValue(max) {
        return Math.floor(Math.random() * max);
    }
}

module.exports = new Utils();