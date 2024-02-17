// @ts-check
import { test, expect } from './fixtures';

test('Button exists in Medium page', async ({ page }) => {
  const mediumUrl ='https://medium.com/hackernoon/hello-world-79436a73e443' 
  const expectedUrl ='https://freedium.cfd/hackernoon/hello-world-79436a73e443' 

  await page.goto(mediumUrl);
  expect(page.locator('button#free-medium__button')).toBeDefined();
  await expect(page.locator('button#free-medium__button')).toHaveText('Read for free');
  
  await page.locator('button#free-medium__button').click()
  const href = await page.evaluate(() => document.location.href);
  expect(href).toEqual(expectedUrl)
});

test('Button do not exist in non Medium page', async ({ page }) => {
  await page.goto('https://www.microsiervos.com');
  await expect(page.locator('button#free-medium__button')).not.toBeVisible();
});
