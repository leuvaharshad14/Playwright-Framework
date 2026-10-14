import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js'
import user from '../TestData/user.json'

test.describe("Login Test",{tags:['Smoke','Login']},()=>{

test('logintoApplication', async ({ page }) => {

    page.goto('/login');
    const loginpage = new LoginPage(page);
    //console.log("user name is " + user.username + " and password is  " + user.password);
    console.log(`user name is ${user.username} and password is ${user.password}` );
    

    await loginpage.logintoApplication1(user.username, user.password)

    //await loginpage.newUserRegistration();
    const dashboardpage = new DashboardPage(page);
    await dashboardpage.clickMenubtn();
    await dashboardpage.clickonSingOut();


})







})

