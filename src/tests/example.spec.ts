import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from '../pageObject'

test.describe('New Test', () => {

test('task1', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  //await page.waitForTimeout(5000);
  await playwrightDev.fillLoginFields('ssls.automation+666@gmail.com', '123456');
  await expect.soft(page.getByRole('button', { name: ' ssls.automation+666@gmail.com' })).toHaveText('ssls.automation+666@gmail.com');

});

test('task2', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.fillLoginFields('ssls@gmail.com', 'qqq');
  await expect(page.locator('text=Uh oh! Email or password is incorrect')).toBeVisible();
  
});

test('task3', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.fillLoginFields('ssls@@@gmail.com', 'qqq');
  await expect(page.locator('text=Uh oh! This')).toBeVisible();
  await expect(page.locator('text=isn’t an email')).toBeVisible();

});

test('task4', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  const name = page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[1]/div[2]/span');
  const email = page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[2]/div[2]/span');
  const phone = page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[4]/div[2]/span');
  const address = page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[5]/div[2]/span');
  const pin = page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[6]/div[2]/span');
  const newsletter = page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[7]/div[2]/span');
  await playwrightDev.goto();
  await playwrightDev.fillLoginFields('ssls.automation+666@gmail.com', '123456');
  await playwrightDev.clickProfileButton();
  await playwrightDev.openProfile();
  await expect(page).toHaveURL('https://www.sbzend.ssls.com/user/profile');
  await expect(name).toHaveText('Tom Ford');
  await expect(email).toHaveText('ssls.automation+666@gmail.com');
  await expect(phone).toHaveText('+380 12312312');
  await expect(address).toHaveText('Diagon alley 21, Misto, Uryupinsk 612120, Ukraine');
  await expect(pin).toHaveText('wUzL');
  await expect(newsletter).toBeEnabled();
});

});
