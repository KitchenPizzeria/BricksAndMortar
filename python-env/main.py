import requests
from bs4 import BeautifulSoup

URL = "https://www.rightmove.co.uk/property-to-rent/find.html?searchType=RENT&locationIdentifier=REGION%5E87490&insId=2&radius=0.0&minPrice=&maxPrice=&minBedrooms=&maxBedrooms=&displayPropertyType=&maxDaysSinceAdded=&sortByPriceDescending=&_includeLetAgreed=on&primaryDisplayPropertyType=&secondaryDisplayPropertyType=&oldDisplayPropertyType=&oldPrimaryDisplayPropertyType=&letType=&letFurnishType=&houseFlatShare="

sites = ["Rightmove"]

page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
properties = soup.find_all(
    "div", class_="l-searchResult is-list")


def getProperties():
    data = []
    for count, property in enumerate(properties):
        price = property.find(
            "span", class_="propertyCard-priceValue").get_text()
        addr = property.address.contents[1]['content']
        # price[1:-4] will remove '£' sign and 'pcm'
        data.append(
            {"count": count, "site": sites[0], "address": addr, "price": price[1:-4]})

    return data
