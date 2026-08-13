import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

const authFile = ".auth/user.json";

setup("Authenticate", async ({ page }) => {
  const username = process.env.SAUCE_USERNAME ?? "standard_user";
  const password = process.env.SAUCE_PASSWORD ?? "secret_sauce";

  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login(username, password);

  await expect(page).toHaveURL(/.*inventory.html/);

  await page.context().storageState({ path: authFile });
});
