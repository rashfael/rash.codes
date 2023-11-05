import { serve } from 'vitepress'
import { chromium } from 'playwright'

await serve()

const browser = await chromium.launch({args: ['--font-render-hinting=none']})
const page = await browser.newPage()

await page.goto('http://localhost:4173/cv')
await page.emulateMedia({ media: 'print' })
await page.pdf({ path: '.vitepress/dist/cv.pdf', format: 'a4', printBackground: true, margin: { top: '1cm', bottom: '1cm', left: '1cm', right: '1cm' } })

await browser.close()
process.exit(0)
