package com.archana.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class AddEmployeePage {

    WebDriver driver;

    By addEmployeeMenu = By.linkText("Add Employee");

    public AddEmployeePage(WebDriver driver) {
        this.driver = driver;
    }

    public void openAddEmployeePage() {
        driver.findElement(addEmployeeMenu).click();
    }

    public boolean isAddEmployeePageOpened() {
        return driver.getCurrentUrl().contains("addemployee");
    }
}