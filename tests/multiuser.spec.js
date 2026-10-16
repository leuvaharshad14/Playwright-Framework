import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js';
import multiusers from '../TestData/MultipleUsers.json'
import { log } from 'node:console';


for (const user of multiusers) {

    test(`login with user ${user.id}`, async ({ page }) => {

        page.goto('/login');
        const loginpage = new LoginPage(page);
        console.log("user name is " + user.username + " and password is  " + user.password);

        await loginpage.logintoApplication1(user.username, user.password)


        console.log(await loginpage.getErrorMessage());

        //expect(await loginpage.errorMessage()).tobe(user.message)
        expect(await loginpage.getErrorMessage()).toBe(user.message);




    })
}
