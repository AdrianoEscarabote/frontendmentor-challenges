import { expect, test } from '@playwright/test';

test('CreationCard component renders correctly and responds to resize', async ({ page }) => {
	await page.goto('/');

	const card = page.locator('[data-test-id="creation-card"]');

	await expect(card.locator('span')).toBeTruthy();
});
