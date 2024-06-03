import { test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';


test('E-commerce flow', async ({page }) => {
    const homepage = new HomePage(page)
    // Step 1: Open the homepage
    await homepage.openBrowser();
    await homepage.inputSearchProducts('Acme Circles T-Shirt');
    await homepage.clickProduct();

});
