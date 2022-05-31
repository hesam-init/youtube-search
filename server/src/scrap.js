// Loading the dependencies. We don't need pretty
import cheerio from "cheerio";
import axios from "axios";

// scraper function
const url = "https://www.y2meta.com/youtube";

const scrapeData = (link) => {
  axios.get(`${url}/${link}`).then((data) => {
    const $ = cheerio.load(data.data);
  });
};

export default scrapeData;
