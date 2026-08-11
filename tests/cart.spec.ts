import { test, expect } from "../fixtures";

test("add products to cart and verify cart count", async ({
  inventoryPage,
}) => {
  await inventoryPage.addToCart("Sauce Labs Bike Light");
  await inventoryPage.addToCart("Sauce Labs Onesie");

  expect(await inventoryPage.getCartCount()).toBe(2);
});
