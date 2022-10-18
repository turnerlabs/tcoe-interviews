const assert = require("assert");
 
describe("Playground demo", function() {
    it("Playground demo TestCase", function() {
        browser.url("http://uitestingplayground.com/");
        $("//a[normalize-space()='Scrollbars']").click();
        
        assert.strictEqual(browser.getTitle(), "Scrollbars");
        
    });
});