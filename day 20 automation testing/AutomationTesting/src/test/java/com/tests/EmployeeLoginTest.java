package com.archana.tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.archana.base.BaseTest;
import com.archana.pages.LoginPage;

public class EmployeeLoginTest extends BaseTest {

    @Test
    public void employeeLoginTest() throws InterruptedException {

        LoginPage login = new LoginPage(driver);

        login.login("admin", "admin123");

        Thread.sleep(2000);

        Assert.assertTrue(driver.getCurrentUrl().contains("dashboard"));

        System.out.println("Login Successful");
    }
}