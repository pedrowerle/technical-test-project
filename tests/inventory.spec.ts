import { test } from '../fixtures/fixture';
import { expect, Page } from '@playwright/test';
import { HeaderComponent } from '../pages/components/headerComponent';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPageSelectors } from '../selectors/cartPageSelectors';

test('Add product to cart', async ({ loggedPage: page }) => {
    const inventoryPage = new InventoryPage(page);
    const header = new HeaderComponent(page);

    await inventoryPage.addBackpackItemToCart();
    await header.openCartPage();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(page.locator(CartPageSelectors.cartItemName)).toHaveText('Sauce Labs Backpack');

});

test('Orders inventory list by price from low to high', async ({ loggedPage:page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.orderByPriceLowToHigh();

    const { prices, sorted } = await inventoryPage.getPricesAndSortedLowToHigh();
    expect(prices).toEqual(sorted);

});