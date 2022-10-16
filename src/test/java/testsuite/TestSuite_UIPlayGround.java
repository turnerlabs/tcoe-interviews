package testsuite;

import actions.ActionHelper;
import base.BaseTestClass;
import org.testng.Assert;
import org.testng.annotations.Test;
import pageobjects.HomePage;

public class TestSuite_UIPlayGround extends BaseTestClass {
    String baseURL = "http://uitestingplayground.com/";

    @Test(description = "TC_002_ValidateLanding_ClickBusinessLink")
    public void TC_001_ValidateLanding_ClickBusinessLink() {
        ActionHelper.openUrl(baseURL);
        HomePage.getInstance().click_HamburgerButton();
        Assert.assertTrue(HomePage.getInstance().isPresent_BusinessLink(), "Business Link not present in Header");
        HomePage.getInstance().click_BusinessLink();
        Assert.assertEquals(ActionHelper.getCurrentURL(), "http://uitestingplayground.com/business",
                "Validate URL of the Page should be /resources");
    }

    @Test(description = "TC_002_ValidateLanding_ClickResourcesLink")
    public void TC_002_ValidateLanding_ClickResourcesLink() {
        ActionHelper.openUrl(baseURL);
        HomePage.getInstance().click_HamburgerButton();
        Assert.assertTrue(HomePage.getInstance().isPresent_ResourcesLink(), "Resources Link not present in Header");
        HomePage.getInstance().click_ResourcesLink();
        Assert.assertEquals(ActionHelper.getCurrentURL(), "http://uitestingplayground.com/resources",
                "Validate URL of the Page should be /resources");
    }

}
