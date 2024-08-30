import { expect, test } from '@playwright/test';

test('header component renders correctly', async ({ page }) => {
	await page.goto('/');

	const header = page.locator('[data-test-id="header"]');

	await expect(header.locator('header')).toBeTruthy();
});
