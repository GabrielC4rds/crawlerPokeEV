const puppeteer = require('puppeteer');

let scrape = async () => {
    
    let url = 'http://www.imdb.com/chart/moviemeter';

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2'});

    let allData = await page.evaluate(() => {
        var resultAllData = {
            name: document.querySelectorAll('td[class="titleColumn"] > a').innerText
        }

        return resultAllData
    });

    browser.close()
    console.log('variavel dos dados', allData);
    return allData
}
scrape();