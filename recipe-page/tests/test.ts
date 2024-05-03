import { expect, test } from '@playwright/test';

test('recipe page has expected title', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('header > h1')).toHaveText('Recipe page');
});

test('recipe page has correct content', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h2')).toHaveText('Simple Omelette Recipe');
	await expect(page.locator('main > div > div > p')).toHaveText(
		'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.'
	);
});

test('recipe page has correct nutrition values', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('table')).toHaveText('Calories 277kcal Carbs 0g Protein 20g Fat 22g');
});
