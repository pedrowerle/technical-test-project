import { Page } from "@playwright/test";
import { CheckoutSelectors } from "../selectors/checkoutSelectors";

export class CheckoutPage {
    constructor(private page: Page) {}

    async enterFirstName(firstName: string) {
        await this.page.locator(CheckoutSelectors.checkoutInfoFirstNameInput).fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.page.locator(CheckoutSelectors.checkoutInfoLastNameInput).fill(lastName);
    }

    async enterPostalCode(postalCode: string) {
        await this.page.locator(CheckoutSelectors.checkoutInfoPostalCodeInput).fill(postalCode);
    }

    async clickContinueButton() {
        await this.page.locator(CheckoutSelectors.checkoutInfoContinueButton).click();
    }

    async fillInformationAndContinue(firstName: string, lastName: string, postalCode: string) {

        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterPostalCode(postalCode);
        await this.clickContinueButton();

    }

    async getCheckoutOverviewValues(): Promise<{ itemPrices: number[], subTotal: number, tax: number, total: number }>{
        const pricesText = await this.page.locator(CheckoutSelectors.checkoutOverviewItemPrice).allTextContents();
        const itemPrices = pricesText.map(price => parseFloat(price.replace('$', '')));

        const subTotalText = await this.page.locator(CheckoutSelectors.checkoutOverviewSubTotalValue).innerText();
        const subTotal = parseFloat(subTotalText.replace('Item total: $', ''));

        const taxText = await this.page.locator(CheckoutSelectors.checkoutOverviewTaxValue).innerText();
        const tax = parseFloat(taxText.replace('Tax: $', ''));

        const totalText = await this.page.locator(CheckoutSelectors.checkoutOverviewTotalValue).innerText();
        const total = parseFloat(totalText.replace('Total: $', ''));

        return { itemPrices, subTotal, tax, total };

    }

}