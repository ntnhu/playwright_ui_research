import { Locator, Page, expect } from "@playwright/test";
import { HomePageLocator } from '../locators/HomePageLocator';
import { CommonPage } from "./CommonPage";

export class HomePage extends CommonPage {
    homePageLocator: HomePageLocator;
    readonly searchTbx: Locator;
    readonly productLbl: Locator

    constructor(page: Page) {
        super(page);
        this.homePageLocator = new HomePageLocator();
        this.searchTbx = this.page.locator(this.homePageLocator.searchTbx);
        this.productLbl = this.page.locator(this.homePageLocator.searchTbx);
    }

    async openBrowser() {
        await this.page.goto("https://demo.vercel.store/");
        await this.page.waitForSelector("//div[contains(text(), 'Acme Store')]");
    }

    async inputSearchProducts(products: string) {
        // Step 2: Enter a search query into the search bar
        await this.searchTbx.fill(products);
        await this.searchTbx.press ('Enter')
        // Verify that the search results are displayed
        await expect(this.page.locator('text=Acme Circles T-Shirt')).toBeVisible();
    }

    async clickProduct() {
        // Step 3: Click on a product
        await this.productLbl.click()
    }
}