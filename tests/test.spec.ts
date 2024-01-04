import { test, expect } from '@playwright/test';
import { users } from './testData/login.json';
import { LoginPage } from '../pages/index'

test.describe('Login',() => {    
    test.beforeEach(async ({page}) => {        
        await page.goto('/');
        await expect(page).toHaveTitle('Swag Labs');
        await expect(page).toHaveURL('https://www.saucedemo.com/');              
    });

    test.only('Standard User Login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(users.standard);
    });

    test('Locked Out User Login', async ({ page }) => {
        console.dir(users.locked);
    });

    test('Problem User Login', async ({ page }) => {
        console.dir(users.problem);
    });

    test('Performance Glitch User Login', async ({ page }) => {
        console.dir(users.glitch);
    });

    test('Error User Login', async ({ page }) => {
        console.dir(users.error);
    });

    test('Visual User Login', async ({ page }) => {
        console.dir(users.visual);
    });
});