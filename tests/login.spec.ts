import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPageSelectors } from '../selectors/inventoryPageSelectors';
import { LoginPageSelectors } from '../selectors/loginPageSelectors';
import { HeaderComponent } from '../pages/components/headerComponent';

test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.accessLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator(InventoryPageSelectors.inventoryList)).toBeVisible();

});

test('Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.accessLoginPage();
    await loginPage.login('invalid_user', 'invalid_password1234567');

    await expect(page).toHaveURL('https://www.saucedemo.com/');

    const errorMessage = page.locator(LoginPageSelectors.errorMessage);
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    
});

test('Successful Logout', async ({ loggedPage: page }) => {
    const headerComponent = new HeaderComponent(page);

    await headerComponent.performLogout();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator(LoginPageSelectors.usernameInput)).toBeVisible();
    
});
