// @ts-check
import { test, expect, chromium } from '@playwright/test';

test ('View product details & add to cart', async ({page})=>{
    const browser= await chromium.launch ({
        headless:false
    });
    //Navigate to URL
    await page.goto("/");
    //Visibility of homepage
    await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
    // Scrolls down 500px
    await page.evaluate(() => window.scrollTo(0, 700));
    //Tap on the first visible product on homepage
    await page.locator('.choose > .nav > li > a').first().click();
    // Verify product details page
    expect(page.url()).toBe('https://automationexercise.com/product_details/1');
    await expect(page.locator('section')).toContainText('Blue Top Category: Women > Tops Rs. 500 Quantity: Add to cart Availability: In Stock Condition: New Brand: Polo');
    //Tap on the quatity field
    await page.locator('#quantity').click();
    //Increase the quantity by 4
    await page.locator('#quantity').fill('4');
    //Tap on Add to cart
    await page.getByRole('button', { name: ' Add to cart' }).click();
    //Tap on view cart
    await page.getByRole('link', { name: 'View Cart' }).click();
    //Verify that product's quantity & details
    await expect(page.locator('#cart_info')).toBeVisible();
    //close the browser
    await browser.close();

});