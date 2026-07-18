package com.archana.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class EmployeesPage {

    WebDriver driver;

    By employeesMenu = By.linkText("Employees");

    public EmployeesPage(WebDriver driver) {
        this.driver = driver;
    }

    public void openEmployeesPage() {
        driver.findElement(employeesMenu).click();
    }

    public boolean isEmployeesPageOpened() {
        return driver.getCurrentUrl().contains("employees");
    }
}
