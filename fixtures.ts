import { test as base } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { InventoryPage } from "./pages/InventoryPage";

type Fixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    console.log("Setup:Login");
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    await use(new InventoryPage(page));

    console.log("Teardown: done");
  },
});

export { expect } from "@playwright/test";
