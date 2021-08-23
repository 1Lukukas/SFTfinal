const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://lunch.devbstaging.com/login-password');
  await page.fill('[aria-label="Email"]', 'edvinas.paskel@sourceryacademy.com');
  await page.fill('[aria-label="Password"]', 'nera svarbus3');
  await page.click('button:has-text("Login")');
  let days = ["Pirmadienis", "Antradienis","Trečiadienis","Ketvirtadienis", "Penktadienis"];
  let day = days[Math.floor(Math.random()*days.length)];
  console.log(day)
  await page.click(`text=${day}`);
  await page.click('.v-card__text');
  let kaina = await page.textContent('button:has-text("€send")')
  kaina = kaina.slice(0, kaina.length - 6);
  console.log(kaina)
  await page.click('button:has-text("€send")');
  await page.goto('https://lunch.devbstaging.com/ordersHistory/');
  daySelected = await page.isVisible(`td:has-text("${day}")`)
  expect(daySelected).toBe(true);
});
