package com.archana.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class GoogleSearchTest {

    @Test
    public void googleSearch() {

        // Open Chrome browser
        WebDriver driver = new ChromeDriver();

        // Maximize browser
        driver.manage().window().maximize();

        // Open Google
        driver.get("https://www.google.com");

        // Find search box
        WebElement searchBox = driver.findElement(By.name("q"));

        // Type text
        searchBox.sendKeys("Selenium WebDriver");

        // Press Enter
        searchBox.submit();

        // Print title
        System.out.println("Page Title: " + driver.getTitle());

        // Close browser
        driver.quit();
    }
}