import { test, expect } from "../fixtures";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("authentication", () => {
  test("standard_user can login", async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL(/.*inventory.html/);
  });

  test("locked_out_user sees the lock-out error", async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login("locked_out_user", "secret_sauce");

    await expect(loginPage.error).toBeVisible();
    await expect(loginPage.error).toContainText("locked out");
  });
});
