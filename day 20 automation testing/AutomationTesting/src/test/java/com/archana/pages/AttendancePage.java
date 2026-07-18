package com.archana.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class AttendancePage {

    WebDriver driver;

    By attendanceMenu = By.linkText("Attendance");

    public AttendancePage(WebDriver driver) {
        this.driver = driver;
    }

    public void openAttendancePage() {
        driver.findElement(attendanceMenu).click();
    }

    public boolean isAttendancePageOpened() {
        return driver.getCurrentUrl().contains("attendance");
    }
}