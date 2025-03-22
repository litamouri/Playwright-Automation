// @ts-check
import { test, expect, chromium} from '@playwright/test';

test('Search products & verify visibility', async ({ page }) => {
    const browser= await chromium.launch ({
            headless:false
        });
    //Navigate to URL    
    await page.goto("/");
    //Visibility of homepage
    await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
    //Click on Product button
    await page.getByRole('link', { name: ' Products' }).click();
    await expect(page.locator('#header')).toContainText(' Products');
    //Enter product name in the searchbox
    await page.getByRole('textbox', { name: 'Search Product' }).fill('Dress');
    //Tap on search button
    await page.getByRole('button', { name: '' }).click();
    //Verify searched product is visible
    await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
    //Assert all loaded products
    await expect(page.getByText('Sleeveless Dress').nth(1)).toBeVisible();
    await expect(page.getByText('Stylish Dress').nth(1)).toBeVisible();
    await expect(page.getByText('Sleeves Top and Short - Blue').nth(1)).toBeVisible();
    await expect(page.getByText('Sleeveless Unicorn Patch Gown').nth(1)).toBeVisible();
    await expect(page.getByText('Cotton Mull Embroidered Dress').nth(1)).toBeVisible();
    await expect(page.getByText('Blue Cotton Indie Mickey Dress').nth(1)).toBeVisible();
    await page.evaluate(() => window.scrollTo(0, 500)); // Scrolls down 500px
    await expect(page.getByText('Long Maxi Tulle Fancy Dress').nth(1)).toBeVisible();
    await expect(page.getByText('Sleeveless Unicorn Print Fit').nth(1)).toBeVisible();
    await expect(page.getByText('Rose Pink Embroidered Maxi').nth(1)).toBeVisible();
    //close the browser
    await browser.close();
});


