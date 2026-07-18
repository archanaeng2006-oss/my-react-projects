package com.archana.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

public class AddEmployeeTest {

    @Test
    public void addEmployeeTest() throws InterruptedException {

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

        // Open Add Employee Page
        driver.findElement(By.linkText("Add Employee")).click();

        Thread.sleep(1000);

        // Fill Employee Details
        driver.findElement(By.name("name")).sendKeys("Archana");
        driver.findElement(By.name("department")).sendKeys("ECE");
        driver.findElement(By.name("designation")).sendKeys("Tester");
        driver.findElement(By.name("email")).sendKeys("archana@gmail.com");
        driver.findElement(By.name("phone")).sendKeys("9876543210");
        driver.findElement(By.name("salary")).sendKeys("30000");

        // Submit
        driver.findElement(By.cssSelector("button[type='submit']")).click();

        Thread.sleep(2000);

        Assert.assertTrue(driver.getCurrentUrl().contains("employees"));

        driver.quit();
    }
}