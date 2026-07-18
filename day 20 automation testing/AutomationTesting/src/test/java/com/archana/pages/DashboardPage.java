package com.archana.tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.archana.base.BaseTest;
import com.archana.pages.DashboardPage;
import com.archana.pages.LoginPage;

public class DashboardTest extends BaseTest {

    @Test
    public void dashboardTest() throws InterruptedException {

        LoginPage login = new LoginPage(driver);

        login.login("admin", "admin123");

        Thread.sleep(2000);

        DashboardPage dashboard = new DashboardPage(driver);

        Assert.assertTrue(dashboard.isDashboardLoaded());

        System.out.println("Dashboard Loaded Successfully");
    }
}