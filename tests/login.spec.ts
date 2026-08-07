import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("standard_user can login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login("standard_user", "secret_sauce");

  // await page.goto("https://www.saucedemo.com/");

  // await page.getByPlaceholder("Username").fill("standard_user");
  // await page.getByPlaceholder("Password").fill("secret_sauce");

  // const loginButton = page.getByRole("button", { name: "Login" });
  // await loginButton.click();

  // await expect(page).toHaveURL(/.*inventory.html/);
  // await expect(page.getByText("Products")).toBeVisible();
  // await expect(page.getByTestId("title")).toHaveText("Products");

  // const product = page
  //   .getByTestId("inventory-item")
  //   .filter({ hasText: "Sauce Labs Bike Light" });

  // await product.getByRole("button", { name: "Add to cart" }).click();
});
