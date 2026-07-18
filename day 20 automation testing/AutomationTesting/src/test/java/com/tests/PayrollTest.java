package com.archana.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

public class PayrollTest {

    @Test
    public void payrollTest() throws InterruptedException {

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

        // Open Payroll Page
        driver.findElement(By.linkText("Payroll")).click();

        Thread.sleep(2000);

        Assert.assertTrue(driver.getCurrentUrl().contains("payroll"));

        System.out.println("Payroll Page Opened Successfully");

        driver.quit();
    }
}