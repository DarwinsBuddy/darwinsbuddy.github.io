const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' }); // Your React app's local URL

    await page.pdf({
      path: 'output.pdf', // Path to save the PDF
      format: 'A4',
      printBackground: true, // Optional: print background graphics
    });

    await browser.close();
    console.log('PDF generated successfully.');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
})();