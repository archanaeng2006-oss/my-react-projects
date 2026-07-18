package com.archana.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

public class EmployeesTest {

    @Test
    public void employeesPageTest() throws InterruptedException {

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();
        driver.get("http://localhost:5173");

        // Login
        driver.findElement(By.cssSelector("input[placeholder='Username']"))
                .sendKeys("admin");

        driver.findElement(By.cssSelector("input[placeholder='Password']"))
                .sendKeys("admin123");

        driver.findElement(By.cssSelector("button[type='submit']"))
                .click();

        Thread.sleep(2000);

        // Open Employees page
        driver.findElement(By.linkText("Employees")).click();

        Thread.sleep(2000);

        // Verify Employees page
        Assert.assertTrue(driver.getCurrentUrl().contains("employees"));

        System.out.println("Employees Page Opened Successfully");

        driver.quit();
    }
}