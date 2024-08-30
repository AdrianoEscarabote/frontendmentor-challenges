import { expect, test } from '@playwright/test';

test('our creaction component renders correctly', async ({ page }) => {
	await page.goto('/');

	const ourCreation = page.locator('[data-test-id="our-creation"]');

	await expect(ourCreation.locator('article')).toBeTruthy();
});
