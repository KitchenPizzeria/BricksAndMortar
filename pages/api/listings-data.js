import data from "./data.json";
import puppeteer from "puppeteer";

export default function handler(req, res) {
  req.method === "GET"
    ? res.status(200).json({ data: data })
    : //  ? res.status(200).json({ data: getListings})
      console.log(req.method, "Not handled Correctly");
}

const getData = async () => {
  const ContainerSelectorPath =
    "#__next > div.css-1wn73pq-SearchResultsWrapper.es0c9wm13 > div.css-aoaxu8-InnerWrapper.es0c9wm12 > main > div.css-8jz4jb-SearchResultsLayoutGroup.es0c9wm6 > div.css-1anhqz4-ListingsContainer.earci3d2";
  const url =
    "https://www.zoopla.co.uk/for-sale/property/london/?q=london&results_sort=newest_listings&search_source=home";

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  //const price = await page.$eval(priceSelector, (e) => e.innerHTML);
  await page.$x(ContainerSelectorPath, (div) => {
    console.log(div);
    // return Array.from(divs, (div) => {
    //   const info = div.querySelectorAll("div");
    //   console.log(info);
    //   return Array.from(info, (eachlisting) => eachlisting.innerText);
    // });
  });

  await browser.close();
};

getData();
