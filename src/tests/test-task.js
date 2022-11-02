import { test, expect } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://www.sbzend.ssls.com');


    await page.getByRole('button', { name: ' Log in' }).click();
    //await expect(page).toHaveURL('https://www.sbzend.ssls.com/authorize');
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('ssls.automation+666@gmail.com');
    await page.getByPlaceholder('Enter password').click();
    await page.getByPlaceholder('Enter password').fill('123456');
    await page.getByPlaceholder('Enter password').click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: 'Login' }).click();
    //await expect(page).toHaveURL('https://www.sbzend.ssls.com/user/bundles');
    await page.getByRole('button', { name: ' ssls.automation+666@gmail.com' }).click();
    await page.getByRole('button', { name: 'Log out' }).click();
    //await expect(page).toHaveURL('https://www.sbzend.ssls.com/authorize');
  

});
import { test, expect } from '@playwright/test';

test('task1', async ({ page }) => {
  await page.goto('https://www.sbzend.ssls.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

