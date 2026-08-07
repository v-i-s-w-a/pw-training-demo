import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test("add products to cart and verify cart count", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login("standard_user", "secret_sauce");

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addToCart("Sauce Labs Bike Light");
  await inventoryPage.addToCart("Sauce Labs Onesie");

  expect(await inventoryPage.getCartCount()).toBe(2);
});
