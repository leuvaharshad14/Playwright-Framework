import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    /**
* @param {import('@playwright/test').Page} page
*/
    constructor(page) {
        super(page);
        this.page = page;
        this.email = page.getByPlaceholder("Enter Email");
        this.password = page.getByPlaceholder("Enter Password")
        this.loginbtn = page.getByRole('button', { name: 'Sign In' })


        this.signupLink = page.locator("//a[text()='New user? Signup']");
        this.errorMessage = page.locator("//h2['errorMessage'][2]")

    }

    async logintoApplication1(username, password) {
        //await this.email.fill(username);
        //await this.password.fill(password)
        //await this.loginbtn.click()

        await this.type(this.email, username);
        await this.type(this.password, password)
        await this.click(this.loginbtn)
    }

    async newUserRegistration() {
        //await this.signupLink.click();
        await this.click(this.signupLink)

    }

    async getErrorMessage() {
        //return await this.errorMessage.textContent();
        await this.gettext(this.errorMessage)

    }


}