import { expect, test } from '@playwright/test';

test('Footer component renders correctly', async ({ page }) => {
	// Acesse a página onde o footer está sendo renderizado
	await page.goto('/');

	// Verifique se os ícones das redes sociais estão presentes
	const socialMedia = ['facebook', 'twitter', 'pinterest', 'instagram'];

	for (const social of socialMedia) {
		await expect(page.getByRole('link', { name: `go to ${social}` })).toBeVisible();
	}

	// Verifique se o texto de direitos autorais está presente
	const copyrightText = `© ${new Date().getFullYear()} Loopstudios. All rights reserved.`;
	await expect(page.locator('footer p')).toContainText(copyrightText);
});
