import "./css/App.css";
import Property from "./Property.js";
import { Puppeteer } from "puppeteer";
import { useState } from "react";

export default function App() {
    const page = useState(async () => {
        const browser = await Puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(
            "https://www.rightmove.co.uk/property-for-sale/find.html?locationIdentifier=REGION%5E87490&maxPrice=110000&minPrice=90000&propertyTypes=&includeSSTC=false&mustHave=&dontShow=&furnishTypes=&keywords="
        );

        return page;
    });

    const getImage = async () => {
        const [el] = await page.$x('//*[@id="property-107320172"]');
        const text = await el.getProperty("textContent");
        return text;
    };

    const getPrice = async () => {
        const [price] = await page.$x(
            '//*[@id="property-107320172"]/div/div/div[3]/div/a/div[1]'
        );
        return "34";
    };

    const getName = async () => {
        const [name] = await page.$x(
            '//*[@id="property-107320172"]/div/div/div[3]/div/a/div[1]'
        );
        console.log("Yes");
        return "238942";
    };

    return (
        <div className="App">
            <h1>RightMove Results</h1>
            <Property name={getName} price={getPrice} image={getImage} />
        </div>
    );
}
