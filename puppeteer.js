const puppeteer = require("puppeteer");

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the website (replace with the desired URL)
  await page.goto("https://example.com");

  // Take a screenshot and save it as 'screenshot.png'
  await page.screenshot({ path: "screenshot.png" });

  // Close the browser
  await browser.close();

  console.log("Screenshot taken!");
})();
