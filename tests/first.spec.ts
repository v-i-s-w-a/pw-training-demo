import { test, expect } from "@playwright/test";

test("Launch Application", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Swag Labs");
});
