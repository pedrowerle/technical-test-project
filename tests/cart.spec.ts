import { test } from '../fixtures/fixture';
import { expect, Page } from '@playwright/test';
import { HeaderComponent } from '../pages/components/headerComponent';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPageSelectors } from '../selectors/cartPageSelectors';
import { CartPage } from '../pages/cartPage';
import { HeaderSelectors } from '../selectors/headerSelectors';

test('Remove product from cart', async ({ pageWithItemInCart: page }) => {
    
    const cartPage = new CartPage(page);

    await cartPage.removeBackpackItemFromCart();
    await expect(page.locator(CartPageSelectors.cartItemName, { hasText: 'Sauce Labs Backpack' })).toHaveCount(0);
    await expect(page.locator(HeaderSelectors.shoppingCartButtonQuantity, { hasText: '1' })).toHaveCount(0);

});

test('Cart quantity label shows correct item count after add and remove actions', async ({ loggedPage: page }) => {

    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const header = new HeaderComponent(page);

    const shoppingCartButtonQuantity = page.locator(HeaderSelectors.shoppingCartButtonQuantity);
    await inventoryPage.addBackpackItemToCart();
    await expect(shoppingCartButtonQuantity).toHaveText('1');
    await inventoryPage.addBikeLightItemToCart();
    await expect(shoppingCartButtonQuantity).toHaveText('2');
    await inventoryPage.addShirtItemToCart();
    await expect(shoppingCartButtonQuantity).toHaveText('3');
    await inventoryPage.addJacketItemToCart();
    await expect(shoppingCartButtonQuantity).toHaveText('4');

    await header.openCartPage();

    await cartPage.removeBackpackItemFromCart();
    await expect(shoppingCartButtonQuantity).toHaveText('3');    
    
});

test('Should not allow checkout with empty cart', async ({loggedPage: page}) => {
    // Negative test: The system contains a bug that allows proceeding to checkout with an empty cart
    
    const header = new HeaderComponent(page);
    const cartPage = new CartPage(page);

    await header.openCartPage();
    await cartPage.clickCheckoutButton();
    await expect(page).not.toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
});
