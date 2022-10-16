package core;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.MobileCapabilityType;
import io.appium.java_client.service.local.AppiumDriverLocalService;
import io.appium.java_client.service.local.AppiumServiceBuilder;
import io.appium.java_client.service.local.flags.GeneralServerFlag;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.ServerSocket;
import java.util.concurrent.TimeUnit;

public class DriverManager {

    private static AndroidDriver<MobileElement> driver;
    private static AppiumDriverLocalService appiumService;

    private static void startAppiumServer() {
        AppiumServiceBuilder builder = new AppiumServiceBuilder();
        builder.usingPort(getFreePort());
        builder.withIPAddress("0.0.0.0");
        builder.withArgument(GeneralServerFlag.RELAXED_SECURITY);
        builder.withArgument(GeneralServerFlag.LOG_LEVEL, "error");
        appiumService = AppiumDriverLocalService.buildService(builder);
        appiumService.start();
        System.out.println("Appium Server started on Url = " + appiumService.getUrl());
    }

    public static void startDriver() {
        startAppiumServer();
        DesiredCapabilities desiredCapabilities = DesiredCapabilities.android();
        desiredCapabilities.setBrowserName("Chrome");
        desiredCapabilities.setCapability("deviceName", "Android");
        desiredCapabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, "UIAutomator2");
        desiredCapabilities.setCapability(AndroidMobileCapabilityType.ADB_EXEC_TIMEOUT, 120000);
        driver = new AndroidDriver<>(appiumService.getUrl(), desiredCapabilities);
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    public static void quitDriver() {
        driver.closeApp();
        driver.quit();
        appiumService.stop();
    }

    public static AndroidDriver<MobileElement> getDriver() {
        return driver;
    }

    private static synchronized int getFreePort() {
        try {
            ServerSocket socket = new ServerSocket(0);
            socket.setReuseAddress(true);
            int port = socket.getLocalPort();
            socket.close();
            return port;
        } catch (Exception e) {
            return 5643;
        }
    }
}
