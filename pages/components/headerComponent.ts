import { Page } from "@playwright/test";
import { HeaderSelectors } from "../../selectors/headerSelectors";

export class HeaderComponent {
    constructor (private page: Page) {}


    async openBurgerMenu(){
        await this.page.locator(HeaderSelectors.burgerMenu).click();
    }

    async clickLogoutButton() {
        await this.page.locator(HeaderSelectors.logoutButton).click();   
    }

    async openCartPage() {
        await this.page.locator(HeaderSelectors.shoppingCartButton).click();
    }

    async performLogout() {
        await this.openBurgerMenu();
        await this.clickLogoutButton();
    }

}