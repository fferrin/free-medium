// @ts-check
import { test, expect } from './fixtures';

const urls = [
  'https://somesubdomain.medium.com',
  'https://medium.com',
  'https://levelup.gitconnected.com',
]

for (const url of urls) {
  test(`Button exists in "${url}" page`, async ({ page }) => {
    const mediumUrl = `${url}/some-post`
    const expectedUrl = 'https://readmedium.com/some-post'

    await page.goto(mediumUrl);
    expect(page.locator('button#free-medium__button')).toBeDefined();
    await expect(page.locator('button#free-medium__button')).toHaveText('Read for free');
    
    await page.locator('button#free-medium__button').click()
    const href = await page.evaluate(() => document.location.href);
    expect(href).toEqual(expectedUrl)
  });
}

test('Button do not exist in non Medium page', async ({ page }) => {
  await page.goto('https://www.microsiervos.com');
  await expect(page.locator('button#free-medium__button')).not.toBeVisible();
});
