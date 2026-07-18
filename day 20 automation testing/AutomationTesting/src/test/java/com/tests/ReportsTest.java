package com.archana.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

public class ReportsTest {

    @Test
    public void reportsTest() throws InterruptedException {

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();
        driver.get("http://localhost:5173");

        // Login
        driver.findElement(By.cssSelector("input[placeholder='Username']"))
                .sendKeys("admin");

        driver.findElement(By.cssSelector("input[placeholder='Password']"))
                .sendKeys("admin123");

        driver.findElement(By.cssSelector("button[type='submit']")).click();

        Thread.sleep(2000);

        // Open Reports Page
        driver.findElement(By.linkText("Reports")).click();

        Thread.sleep(2000);

        // Verify Reports Page
        Assert.assertTrue(driver.getCurrentUrl().contains("reports"));

        System.out.println("Reports Page Opened Successfully");

        driver.quit();
    }
}