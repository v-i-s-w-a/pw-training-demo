import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {
  readonly title: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    super(page, "/inventory.html");
    this.title = page.getByText("Products");
    this.cartBadge = page.getByTestId("shopping-cart-badge");
  }

  private card(productName: string): Locator {
    return this.page
      .getByTestId("inventory-item")
      .filter({ hasText: productName });
  }

  async addToCart(productName: string) {
    await this.card(productName)
      .getByRole("button", { name: "Add to cart" })
      .click();
  }

  async getCartCount(): Promise<number> {
    if ((await this.cartBadge.count()) === 0) return 0;
    return Number(await this.cartBadge.textContent());
  }
}
