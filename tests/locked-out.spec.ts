import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("locked_out_user sees the lock-out error", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login("locked_out_user", "secret_sauce");

  await expect(loginPage.error).toBeVisible();
  await expect(loginPage.error).toContainText("locked out");
});
