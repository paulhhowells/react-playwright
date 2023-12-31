import { test, expect } from '@playwright/test';
import { baseURL } from '../constants';

test('runs vite', async ({ page }) => {
  await page.goto(baseURL + '/');

  await expect(page).toHaveTitle(/Vite \+ React/);
  await expect(page.getByRole('heading', { name: 'Vite + React' })).toBeVisible();

  // expect(page.locator(...)).toBeVisible()
  // await expect(page.getByText('Welcome')).toBeVisible();
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
