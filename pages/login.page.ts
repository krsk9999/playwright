import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly title: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly errorMsg: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;    
    this.title = page.locator('title'); 
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.errorMsg = page.locator('[data-test="error"]');
    this.loginBtn = page.locator('#login-button');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(user: User) {
    await expect(this.username).toBeVisible();
    await expect(this.password).toBeVisible();
    await expect(this.loginBtn).toBeVisible();
    await expect(this.loginBtn).toBeEnabled();
    await this.username.fill(user.username);
    await this.password.fill(user.password);
    await this.loginBtn.click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(this.page).toHaveTitle('Swag Labs');    
  }

}