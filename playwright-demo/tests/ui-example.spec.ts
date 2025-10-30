import { test, expect } from '@playwright/test';

test('should navigate to Playwright homepage and verify title', async ({ page }) => {
    // Go to Playwright website
    await page.goto('https://playwright.dev/');

    // Expect title to contain "Playwright"
    await expect(page).toHaveTitle(/Playwright/);

    // Click on "Get started"
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expect URL to contain 'docs'
    await expect(page).toHaveURL(/.*docs/);
});