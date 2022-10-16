package actions;

import core.DriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ActionHelper {

    public static void openUrl(String url) {
        DriverManager.getDriver().get(url);
    }

    public static WebElement findElement(By by) {
        WebDriverWait wait = new WebDriverWait(DriverManager.getDriver(), 20);
        return wait.until(ExpectedConditions.visibilityOfElementLocated(by));
    }

    public static void click(By by) {
        findElement(by).click();
    }


    public static String getCurrentURL() {
        return DriverManager.getDriver().getCurrentUrl();
    }

    public static boolean isPresent(By by) {
        return DriverManager.getDriver().findElements(by).size() > 0 && findElement(by).isDisplayed();
    }

}
