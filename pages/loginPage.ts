import { Page } from "@playwright/test";
import { LoginPageSelectors } from "../selectors/loginPageSelectors";
import { HeaderSelectors } from "../selectors/headerSelectors";

export class LoginPage {

    constructor(private page: Page) {}

    async accessLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(username: string) {
        await this.page.locator(LoginPageSelectors.usernameInput).fill(username);
    }

    async enterPassword(password: string) {
        await this.page.locator(LoginPageSelectors.passwordInput).fill(password);
    }

    async clickLoginButton() {
        await this.page.locator(LoginPageSelectors.loginButton).click();
    }

    async login(username: string, password: string) {

        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();

    }

}