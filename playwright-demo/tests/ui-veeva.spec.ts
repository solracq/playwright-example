import { test, expect } from '@playwright/test';

test('should navigate to Veeva homepage and verify title', async ({ page }) => {
    // Go to Playwright website
    await page.goto('https://www.veeva.com/');

    // Expect title to contain "Playwright"
    await expect(page).toHaveTitle(/Veeva/);

    // Click on "Get started"
    await page.getByRole('link', { name: 'See the Impact' }).click();

    // Expect URL to contain 'docs'
    await expect(page).toHaveURL(/.*customers/);
});