import { test, expect } from '@playwright/test';
import { browser } from 'protractor';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://www.sbzend.ssls.com');
    await page.getByRole('button', { name: ' Log in' }).click();
    await expect(page).toHaveURL('https://www.sbzend.ssls.com/authorize');
    await page.getByPlaceholder('Email').fill('ssls.automation+666@gmail.com');
    await page.getByPlaceholder('Enter password').fill('123456');
    //await page.getByRole('button', { name: '' }).click();
    await expect.soft(page.getByPlaceholder('Enter password')).toHaveText('123456');


    await page.getByRole('button', { name: 'Login' }).click();
    //await expect.soft(page.getByRole('button', { name: ' ssls.automation+666@gmail.com' }));
    await expect.soft(page.getByRole('button', { name: ' ssls.automation+666@gmail.com' })).toHaveText('ssls.automation+666@gmail.com');
    await page.getByRole('button', { name: ' ssls.automation+666@gmail.com' }).click();
    await page.getByRole('button', { name: 'Log out' }).click();
    //await page.waitForTimeout(2000);
  

});