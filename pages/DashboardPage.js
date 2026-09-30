export class DashboardPage {
    constructor(page) {
        this.page = page;
        //this.menubtn = page.getByRole('img', { name: 'menu' });
        this.mentubtn = page.locator("//img[@alt='menu']");
        this.signoutBtn = page.getByRole('button', { name: 'Sign out' });

    }

    async clickMenubtn() {
        await this.mentubtn.click();
    }

    async clickonSingOut() {
        await this.signoutBtn.click();
    }


}