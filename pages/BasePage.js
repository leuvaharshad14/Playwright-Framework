import { test } from '@playwright/test'
import { text } from 'node:stream/consumers';



export class BasePage {
    /**
 * @param {import('@playwright/test').Page} page
 */

    constructor(page) {
        this.page = page;
    }

    async type(locator, text) {
        await locator.fill(text);

    }

    async click(locator) {
        await locator.click();
    }

    async gettext(locator) {
        await locator.textContent();
    }

    async uploadFile(locator, filepath) {
        locator.setInputFiles(filepath)

    }
}
