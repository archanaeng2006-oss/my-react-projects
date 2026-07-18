package com.archana.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class LoginTest {

    @Test
    public void loginTest() {

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.get("https://the-internet.herokuapp.com/login");

        driver.findElement(By.id("username"))
              .sendKeys("tomsmith");

        driver.findElement(By.id("password"))
              .sendKeys("SuperSecretPassword!");

        driver.findElement(By.cssSelector("button[type='submit']"))
              .click();

        System.out.println("Title: " + driver.getTitle());

        driver.quit();
    }
}