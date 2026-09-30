

export class LoginPage {
    /**
 * @param {import('@playwright/test').Page} page
 */

    constructor(page) {
        this.page = page;
        this.email = page.getByPlaceholder("Enter Email");
        this.password = page.getByPlaceholder("Enter Password")
        this.loginbtn = page.getByRole('button', { name: 'Sign In' })


        this.signupLink = page.locator("//a[text()='New user? Signup']");
        this.errorMessage = page.locator("//h2['errorMessage'][2]")

    }

    async logintoApplication1(username, password) {
        await this.email.fill(username);
        await this.password.fill(password)
        await this.loginbtn.click()
    }

    async newUserRegistration() {
        await this.signupLink.click();

    }

    async errormessageonSingin() {
        await this.errorMessage.textContent();
    }


}