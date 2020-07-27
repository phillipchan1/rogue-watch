import * as puppeteer from 'puppeteer'
import * as cron from 'node-cron'

export class Server {
  constructor() {
    cron.schedule('* * * * *', () => {
      console.log('running a task every minute')
    })
  }

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
