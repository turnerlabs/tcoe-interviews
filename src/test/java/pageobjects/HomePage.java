package pageobjects;

import actions.ActionHelper;
import org.openqa.selenium.By;

public class HomePage {
    private static HomePage _instance;

    private final By hamburgerButton = By.xpath("//span[@class='navbar-toggler-icon']/..");
    private final By resourcesLink = By.linkText("Resources");
    private final By businessLink = By.linkText("Business");

    private HomePage() {

    }

    public static HomePage getInstance() {
        if (_instance == null)
            _instance = new HomePage();
        return _instance;
    }

    public void click_HamburgerButton() {
        ActionHelper.click(hamburgerButton);
    }

    public void click_ResourcesLink() {
        ActionHelper.click(resourcesLink);
    }

    public void click_BusinessLink() {
        ActionHelper.click(businessLink);
    }

    public boolean isPresent_BusinessLink() {
        return ActionHelper.isPresent(businessLink);
    }

    public boolean isPresent_ResourcesLink() {
        return ActionHelper.isPresent(resourcesLink);
    }

}
