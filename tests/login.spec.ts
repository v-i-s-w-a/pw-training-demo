import { test, expect } from "@playwright/test";

test("standard_user can login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");

  const loginButton = page.getByRole("button", { name: "Login" });
  await loginButton.click();

  await expect(page).toHaveURL(/.*inventory.html/);
  await expect(page.getByText("Products")).toBeVisible();
  const productText = await page.getByTestId("title").textContent();
  console.log(productText);

  //   await page.getByRole("button", { name: "Add to cart" }).first().click();

  const product = await page
    .getByTestId("inventory-item")
    .filter({ hasText: "Sauce Labs Bike Light" });

  await product.getByRole("button", { name: "Add to cart" }).click();

  await new Promise((r) => setTimeout(r, 20000));
});
