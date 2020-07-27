const puppeteer = require('puppeteer')

export class Server {
  constructor() {}

  async app() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(
      'https://www.roguefitness.com/rogue-calibrated-lb-steel-plates'
    )
    const screenshot = await page.screenshot({ path: 'example.png' })

    await browser.close()
  }
}

module.exports = new Server().app()
