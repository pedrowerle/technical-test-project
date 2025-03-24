import { test } from '../fixtures/fixture';
import { expect, Page } from '@playwright/test';
import { CheckoutPage } from '../pages/checkoutPage';
import { CartPage } from '../pages/cartPage';


test('Should proceed to Checkout Overview step when all required fields are filled', async ({ pageWithItemInCart: page }) => {
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await cartPage.clickCheckoutButton();
    await checkoutPage.fillInformationAndContinue('First Name Test', 'Last Name Test', '00000000');
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

});

test('Validates total amount in checkout overview is correctly calculated', async ({ checkoutOverviewPage: page }) => { 
    const checkoutPage = new CheckoutPage(page);

    const { itemPrices, subTotal, tax, total } = await checkoutPage.getCheckoutOverviewValues();
  
    const expectedSubtotal = itemPrices.reduce((acc, price) => acc + price, 0);
    expect(subTotal).toBeCloseTo(expectedSubtotal, 2);
  
    const expectedTotal = expectedSubtotal + tax;
    expect(total).toBeCloseTo(expectedTotal, 2);
    
});