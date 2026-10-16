import { BasePage } from "./BasePage";


export class DashboardPage extends BasePage {

    constructor(page) {
        super(page);
        this.page = page;
        //this.menubtn = page.getByRole('img', { name: 'menu' });
        this.mentubtn = page.locator("//img[@alt='menu']");
        this.signoutBtn = page.getByRole('button', { name: 'Sign out' });

    }

    async clickMenubtn() {
        // await this.mentubtn.click();
        await this.click(this.mentubtn)
    }

    async clickonSingOut() {
        //await this.signoutBtn.click();
        await this.click(this.signoutBtn)
    }


}