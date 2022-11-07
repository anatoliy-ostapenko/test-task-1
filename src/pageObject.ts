

import { expect } from '@playwright/test';

export class PlaywrightDevPage{
  page: any;
  userName: any;
  logIn: any;
  password: any;
  eye: any;
  loginButton: any;
  profileButton: any;
  menuButton: any;

  constructor(page) {
    this.page = page;
  
  this.logIn = page.getByRole('button', { name: ' Log in' });
  this.userName = page.getByPlaceholder('Email');
  this.password = page.getByPlaceholder('Enter password');
  this.eye = page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[2]/div/div[1]/div[2]/button/span[1]');
  this.loginButton = page.getByRole('button', { name: 'Login' });
  this.profileButton = page.locator( 'text= Profile');
  this.menuButton = page.getByRole('button', { name: ' ssls.automation+666@gmail.com' })
  }

  async goto() {
    await this.page.goto('https://www.sbzend.ssls.com');
    await expect(this.page).toHaveURL('https://www.sbzend.ssls.com/');
  }
  

  async fillLoginFields(
    userName: string,
    password: string,
  ): Promise<void> {
    await this.logIn.click();
    await expect(this.page).toHaveURL('https://www.sbzend.ssls.com/authorize');
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.eye.click();
    await expect(this.page.locator('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[2]/div/div[1]/div[2]/button/span[1]')).toHaveClass('icon icon-eye ng-hide');
    await this.loginButton.click();
  }
  
  async openProfile() {
    await this.profileButton.click();
  }

  async clickProfileButton() {
    await this.menuButton.click();
  }

  async logOut(){
    await this.page.getByRole('button', { name: ' ssls.automation+666@gmail.com' }).click();
    await this.page.getByRole('button', { name: 'Log out' }).click();
  }

  
 
  

}

