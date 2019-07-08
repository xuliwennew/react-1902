
/**
 *  superagent jd http
 *  cheerio node jquery
 */
const superagent = require('superagent');
const cheero = require("cheerio")
const fs = require("fs")

let crawlerUrl = "https://so.m.jd.com/ware/search.action?keyword=%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91&searchFrom=search&sf=12&as=1"


superagent
    .get(crawlerUrl)
    .then((res)=>{
       // console.log(res.text) xpath
        let $ = cheero.load(res.text)

        let productList= $("#itemList .search_prolist_item")
        let arrs = []
        productList.each((index,item)=>{
            let product = $(item)
            let productInfo = {}
            productInfo.title = product.find(".search_prolist_title").text()
            productInfo.pic = product.find(".photo").attr("src")
            productInfo.price = product.find(".search_prolist_price").find("em").attr("pri")
            arrs.push(productInfo)
        })

        let products ="["
        arrs.forEach((item,key)=>{
            products += JSON.stringify(item) + ","
        })
        products += "]"

        fs.appendFile("data/product.json",products,"utf-8",(err,result)=>{
            console.log(err)
        })
    })
