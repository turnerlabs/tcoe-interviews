const Page = require('./page');

/**
 * UI Testing Playground Resources Page
 */
class ResourcesPage extends Page {
    /**
     * Page Locators
     */
    get resourcesTitle() {
        return $('h3=Resources');
    }

    get learningSectionTitle() {
        return $('h4=Learning');
    }

    get w3schoolscomLink() {
        return $('=w3schools.com');
    }

    get mdnLink() {
        return $('=MDN');
    }

    get leanRegexLink() {
        return $('=Learn regex the easy way');
    }

    get devHintsLink() {
        return $('=devhints.io');
    }

    get standardsSectionTitle() {
        return $('h4=Standards');
    }

    get w3cLink() {
        return $('=W3C');
    }

    get articlesSectionTitle() {
        return $('h4=Articles');
    }

    get testPyramidLink() {
        return $('=Test Pyramid');
    }

    get flakyTestLink() {
        return $('//a[contains(text(),\'Where do our flaky tests come from?\')]');
    }

    get communitySectionTitle() {
        return $('h4=Community');
    }

    get ministryTestingLink() {
        return $('=Ministry of Testing');
    }

    get uTestLink() {
        return $('=uTest');
    }

    get softwareTestingHelpLink() {
        return $('=Software Testing Help');
    }

    get dZoneHelpLink() {
        return $('=DZone');
    }

    get stackOverflowLink() {
        return $('=StackOverflow');
    }
}

module.exports = new ResourcesPage();
