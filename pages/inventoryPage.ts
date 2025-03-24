import { Page } from "@playwright/test";
import { InventoryPageSelectors } from "../selectors/inventoryPageSelectors";

export class InventoryPage {

    constructor(private page: Page) {}


    async addBackpackItemToCart() {
        await this.page.locator(InventoryPageSelectors.inventoryBackpackItemAddButton).click();
    }

    async addBikeLightItemToCart() {
        await this.page.locator(InventoryPageSelectors.inventoryBikeLightItemAddButton).click();
    }

    async addShirtItemToCart() {
        await this.page.locator(InventoryPageSelectors.inventoryShirtItemAddButton).click();
    }

    async addJacketItemToCart() {
        await this.page.locator(InventoryPageSelectors.inventoryJacketItemAddButton).click();
    }

    async orderByPriceLowToHigh() {
        await this.page.selectOption(InventoryPageSelectors.inventoryOrderSelect, 'lohi');
    }

    async getPricesAndSortedLowToHigh(): Promise<{ prices: number[]; sorted: number[] }> {
        const pricesText = await this.page.locator(InventoryPageSelectors.inventoryItemPrice).allTextContents();
        const prices = pricesText.map(price => parseFloat(price.replace('$', '')));
        const sorted = [...prices].sort((a, b) => a - b);
        return { prices, sorted };
    }      
}