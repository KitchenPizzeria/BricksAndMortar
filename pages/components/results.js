function results(props) {
  return (
    <div className="results">
    {props.map((prop) => {
        <h5>{prop.imageURL}</h5>
        <h5>{prop.price}</h5>
        <h5>{prop.Postcode}</h5>
    })}
    </div>
  );
}

// this will fetch the information for
results.getInitialProps = async (ctx) => {
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



  return {
    props: reuts,
  };
};

export default results;
