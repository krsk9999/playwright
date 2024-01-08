import { test, expect } from '@playwright/test';
import { users } from './testData/login.json';
import { LoginPage } from '../pages/index'

test.describe('Login',() => {    
    test.beforeEach(async ({page}, testInfo) => {        
        await page.goto('/', { waitUntil: 'networkidle'});
        await expect(page).toHaveTitle('Swag Labs');
        await expect(page).toHaveURL(`${testInfo.project.use.baseURL}`);              
    });

    test.only('Standard User Login', async ({ page }, testInfo) => {
        console.dir(testInfo.project.use.baseURL)
        const loginPage = new LoginPage(page, testInfo);
        await loginPage.login(users.standard);
    });

    test('Locked Out User Login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(users.locked);
    });

    test('Problem User Login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(users.problem);
    });

    test('Performance Glitch User Login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(users.glitch);
    });

    test('Error User Login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(users.error);
    });

    test('Visual User Login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(users.visual);
    });
});
