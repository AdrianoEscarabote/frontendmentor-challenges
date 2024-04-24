import { expect, test } from '@playwright/test';

test('index page has expected title', async ({ page }) => {
	await page.goto('/');
	await expect(page.title()).resolves.toMatch('Blog Preview Card');
});

test('index page has expected article title', async ({ page }) => {
	await page.goto('/');
	await expect(page.textContent('h2')).resolves.toMatch('HTML & CSS foundations');
});

test('index page has expected author name', async ({ page }) => {
	await page.goto('/');
	await expect(page.textContent('.flex.gap-3.items-center.mt-6 .bodySBold')).resolves.toMatch(
		'Greg Hooper'
	);
});
