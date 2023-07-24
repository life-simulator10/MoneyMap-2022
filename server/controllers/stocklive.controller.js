
import axios from "axios";
import cheerio from "cheerio";

async function NepseFeed() {
    try {
        const siteURL = "https://merolagani.com/LatestMarket.aspx/"
        const { data } = await axios({
            method: "GET",
            url: siteURL
        })
        const $ = cheerio.load(data);
        const elemSelector = "#ctl00_ContentPlaceHolder1_LiveTrading > table > tbody > tr";
        const nepse = []
        const keys = [
            "scrip",
            "ltp",
            "percent_change",
            "high",
            "low",
            "lowvalue",
            "qty"
        ]

        $(elemSelector).each((parentIdx, parentElem) => {
            let keyIdx = 0
            const marketData = {}
            $(parentElem).children().each((childIdx, childElem) => {
                const tdValue = $(childElem).text();
                if (tdValue) {
                    marketData[keys[keyIdx]] = tdValue
                    keyIdx++
                }
            })
            nepse.push(marketData)
        })
        return nepse
    } catch (error) {
        console.error(err);
    }
}

const getNepseFeed = async (req, res) => {
    try {
        const pricedata = await NepseFeed()
        return res.status(200).json(
            { result: pricedata }
        )
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export {
    getNepseFeed,
}
