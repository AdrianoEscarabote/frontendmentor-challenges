import { expect, test } from '@playwright/test';

test('expenses chart component has expected h1', async ({ page }) => {
	await page.goto('/');

	await expect(page.locator('header h1')).toHaveText('Expenses chart component');
});

test('chart data is being displayed correctly', async ({ page }) => {
	await page.goto('/');

	await expect(page.locator('ol')).toHaveText(
		'$17.45  mon $34.91  tue $52.36  wed $31.07  thu $23.39  fri $43.28  sat $25.48  sun'
	);
});

test('balance is displayed correctly', async ({ page }) => {
	await page.goto('/');

	await expect(page.locator('main section article:first-child p.headingS')).toHaveText('$921.48');
});

test('total this month is displayed correctly', async ({ page }) => {
	await page.goto('/');

	await expect(
		page.locator('main section article:last-child p.bodyRegular.text-neutral-mediumBrown span')
	).toHaveText('$478.33');
});

test('percentage variation from last month is displayed correctly', async ({ page }) => {
	await page.goto('/');

	await expect(
		page.locator('main section article:last-child div.flex div.flex:last-child p:first-child')
	).toHaveText('+2.4%');
});
