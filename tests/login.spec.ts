import { test, expect } from "@playwright/test";

test("standard_user can login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");

  const loginButton = page.getByRole("button", { name: "Login" });
  await loginButton.click();

  await expect(page).toHaveURL(/.*inventory.html/);
  await expect(page.getByText("Products")).toBeVisible();
  await expect(page.getByTestId("title")).toHaveText("Products");

  const product = page
    .getByTestId("inventory-item")
    .filter({ hasText: "Sauce Labs Bike Light" });

  await product.getByRole("button", { name: "Add to cart" }).click();
});
