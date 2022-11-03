import { test, expect } from '@playwright/test';
import { browser } from 'protractor';

test('task1', async ({ page }) => {
    await page.goto('https://www.sbzend.ssls.com');
    await expect(page).toHaveURL('https://www.sbzend.ssls.com/');
    await page.getByRole('button', { name: ' Log in' }).click();
    await expect(page).toHaveURL('https://www.sbzend.ssls.com/authorize');
    await page.getByPlaceholder('Email').fill('ssls.automation+666@gmail.com');
    await page.getByPlaceholder('Enter password').fill('123456');
    await page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[2]/div/div[1]/div[2]/button/span[1]').click();
    await expect(page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[2]/div/div[1]/div[2]/button/span[1]')).toHaveClass('icon icon-eye ng-hide');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect.soft(page.getByRole('button', { name: ' ssls.automation+666@gmail.com' })).toHaveText('ssls.automation+666@gmail.com');
    await page.getByRole('button', { name: ' ssls.automation+666@gmail.com' }).click();
    await page.getByRole('button', { name: 'Log out' }).click();
});

test.skip('task2', async ({ page }) => {
    await page.goto('https://www.sbzend.ssls.com');
    await expect(page).toHaveURL('https://www.sbzend.ssls.com/');
    await page.getByRole('button', { name: ' Log in' }).click();
    await expect(page).toHaveURL('https://www.sbzend.ssls.com/authorize');
    await page.getByPlaceholder('Email').fill('1234@gmail.com');
    await page.getByPlaceholder('Enter password').fill('123456');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(2000);
    await expect(page.locator('text=Uh oh! Email or password is incorrect')).toBeVisible();
});

test.skip('task3', async ({ page }) => {
  await page.goto('https://www.sbzend.ssls.com');
  await expect(page).toHaveURL('https://www.sbzend.ssls.com/');
  await page.getByRole('button', { name: ' Log in' }).click();
  await expect(page).toHaveURL('https://www.sbzend.ssls.com/authorize');
  await page.getByPlaceholder('Email').fill('test@@test.com');
  await page.getByPlaceholder('Enter password').fill('123456');
  //await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(2000);
  await expect(page.locator('text=Uh oh! This')).toBeVisible();
  await expect(page.locator('text=isn’t an email')).toBeVisible();
});

test.skip('task4', async ({ page }) => {
    await page.goto('https://www.sbzend.ssls.com');
    await page.getByRole('button', { name: ' Log in' }).click();
    await page.getByPlaceholder('Email').fill('ssls.automation+666@gmail.com');
    await page.getByPlaceholder('Enter password').fill('123456');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: ' ssls.automation+666@gmail.com' }).click();
    await page.locator( 'text= Profile').click();
    await expect(page).toHaveURL('https://www.sbzend.ssls.com/user/profile');
    await expect(page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[1]/div[2]/span')).toHaveText('Tom Ford');
    await expect(page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[2]/div[2]/span')).toHaveText('ssls.automation+666@gmail.com');
    await expect(page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[4]/div[2]/span')).toHaveText('+380 12312312');
    await expect(page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[5]/div[2]/span')).toHaveText('Diagon alley 21, Misto, Uryupinsk 612120, Ukraine');
    await expect(page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[6]/div[2]/span')).toHaveText('wUzL');
    await expect(page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[7]/div[2]/span')).toBeEnabled();
    //await page.waitForTimeout(2000);
});