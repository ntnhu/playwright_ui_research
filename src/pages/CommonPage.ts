import { Page } from "@playwright/test";

export class CommonPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string) {
        await this.page.goto(url, { timeout: 20000 });
    }

    async waitInSeconds(timeout: number) {
        await this.page.waitForTimeout(timeout * 1000);
    }

}