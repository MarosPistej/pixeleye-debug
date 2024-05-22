// @ts-check
const { test, expect } = require("@playwright/test");
import { pixeleyeSnapshot } from "@pixeleye/playwright";

test("has title", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/index.html");

  // Expect a title "to contain" a substring.
  await expect(page.getByTestId("drawing-done")).toBeAttached();

  await pixeleyeSnapshot(page, {
    name: "New Todo",
  });
});
