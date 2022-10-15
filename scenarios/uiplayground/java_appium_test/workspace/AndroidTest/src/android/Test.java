package android;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Paths;
import java.util.Objects;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.Activity;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.MobileCapabilityType;

/**
 * Pre-requisite: Appium Server must be up and running listening on port : 4723
 * 
 * @author dominicj
 *
 */
public class Test {

	private static AppiumDriver driver;
	
	@BeforeClass
	public void classInit() throws URISyntaxException, MalformedURLException {
		 URL testAppUrl = getClass().getClassLoader().getResource("..\\android_apps\\app-debug.apk");
		 File testAppFile = Paths.get(Objects.requireNonNull(testAppUrl).toURI()).toFile();
		 String testAppPath = testAppFile.getAbsolutePath();
		 DesiredCapabilities desiredCaps = new DesiredCapabilities();
		 desiredCaps.setCapability(MobileCapabilityType.DEVICE_NAME, "URT0220303000040");
		 desiredCaps.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, "com.example.autotestapplication");
		 desiredCaps.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
		 desiredCaps.setCapability(MobileCapabilityType.PLATFORM_VERSION, "10.0");
		 desiredCaps.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY, "LoginActivity");
		 desiredCaps.setCapability(MobileCapabilityType.APP, testAppPath);
		 driver = new AppiumDriver(new URL("http://127.0.0.1:4723/wd/hub"), desiredCaps);
	}
	
	/**
	 * Start Android Application under "android_apps" folder.
	 */
	@Before
	public void testInit() {
		if (driver != null) {
			((AndroidDriver) driver).startActivity(new Activity("com.example.autotestapplication", "LoginActivity"));
		}
	}

	/**
	 * Fill out "username" and "password" field and verify app is no 
	 * longer on login activity page after selecting login button.
	 */
	@org.junit.Test
	public void testLogin() {
		driver.findElement(By.id("username")).click();
		driver.findElement(By.id("username")).sendKeys("dominicj");
		driver.findElement(By.id("password")).click();
		driver.findElement(By.id("password")).sendKeys("secret");
		driver.findElement(By.id("login")).click();
		Assert.assertFalse(driver.findElement(By.id("login")).isDisplayed());
	}
	
	/**
	 * Test clean up method.
	 */
	@After
	public void testCleanup() {
		if (driver != null) {
			driver.close();
		}
	}

}
