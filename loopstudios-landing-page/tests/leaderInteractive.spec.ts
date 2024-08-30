import { expect, test } from '@playwright/test';

test('leader interactive component renders correctly', async ({ page }) => {
	await page.goto('/');

	const leaderInteractive = page.locator('[data-test-id="leader-interactive"]');

	await expect(leaderInteractive.locator('section')).toBeTruthy();
});
