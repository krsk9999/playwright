import { expect, TestInfo, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly title: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly errorMsg: Locator;
  readonly loginBtn: Locator;
  readonly testInfo: TestInfo | undefined

  constructor(page: Page, testInfo?: TestInfo) {
    this.page = page;    
    this.title = page.locator('title'); 
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.errorMsg = page.locator('[data-test="error"]');
    this.loginBtn = page.locator('#login-button');
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.title).toHaveText('Swag Labs');
    if (this.testInfo) await expect(this.page).toHaveURL(`${this.testInfo?.project.use.baseURL}`);
  }

  async login(user: User) {
    await expect(this.username).toBeVisible();
    await expect(this.password).toBeVisible();
    await expect(this.loginBtn).toBeVisible();
    await expect(this.loginBtn).toBeEnabled();
    await this.username.fill(user.username);
    await this.password.fill(user.password);
    await this.loginBtn.click();
    if (this.testInfo) await expect(this.page).toHaveURL(`${this.testInfo.project.use.baseURL}/inventory.html`);
    await expect(this.page).toHaveTitle('Swag Labs');    
  }

}