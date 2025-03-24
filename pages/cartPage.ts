import { Page } from "@playwright/test";
import { CartPageSelectors } from "../selectors/cartPageSelectors";

export class CartPage {
    constructor(private page: Page) {}


    async removeBackpackItemFromCart() {
        await this.page.locator(CartPageSelectors.cartRemoveBackpackItemButton).click();
    }

    async clickCheckoutButton() {
        await this.page.locator(CartPageSelectors.cartCheckoutButton).click();
    }
}