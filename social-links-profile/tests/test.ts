import { expect, test } from '@playwright/test';

test('index page has main heading', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('header > h1')).toBeVisible();
});

test('index page has social media links', async ({ page }) => {
	await page.goto('/');
	const links = await page.locator('a').count();
	expect(links).toBe(5);
});

test('index page has author name', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('.flex.flex-col.gap-1.my-6 > h2')).toHaveText('Jessica Randall');
});

test('index page has correct image', async ({ page }) => {
	await page.goto('/');
	const image = await page.locator('img').first();
	const src = await image.getAttribute('src');
	expect(src).toContain('avatar-jessica.jpeg');
});
