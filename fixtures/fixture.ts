import { test as baseTest, type Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { HeaderComponent } from '../pages/components/headerComponent';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';

type MyFixtures = {
    loggedPage: Page,
    pageWithItemInCart: Page,
    checkoutOverviewPage: Page,
    
};

export const test = baseTest.extend<MyFixtures>({
  loggedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.accessLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await use(page);
  },

  pageWithItemInCart: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const header = new HeaderComponent(page);

    await loginPage.accessLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await inventoryPage.addBackpackItemToCart();

    await header.openCartPage();

    await use(page);
  },
  
  checkoutOverviewPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const header = new HeaderComponent(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
  
    await loginPage.accessLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  
    await inventoryPage.addBackpackItemToCart();
    await inventoryPage.addBikeLightItemToCart();
    await inventoryPage.addJacketItemToCart();
    await inventoryPage.addShirtItemToCart();

    await header.openCartPage();
    await cartPage.clickCheckoutButton();
  
    await checkoutPage.fillInformationAndContinue('First Name Test', 'Last Name Test', '00000000');
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
  
    await use(page);
  },

});