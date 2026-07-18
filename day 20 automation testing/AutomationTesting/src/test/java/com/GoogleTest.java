package com.archana.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class GoogleTest {

    @Test
    public void googleOpenTest() {

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.get("https://www.google.com");

        System.out.println("Page Title: " + driver.getTitle());

        driver.quit();
    }
}