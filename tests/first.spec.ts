import { test, expect } from "@playwright/test";

test("Launch Application", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle("Swag Labs");

  console.log(await page.url());
});
