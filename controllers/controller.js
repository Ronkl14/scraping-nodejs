import axios from "axios";
import cheerio from "cheerio";
import asyncHandler from "express-async-handler";

export const getData = asyncHandler(async (req, res, next) => {
  const axiosResponse = await axios.request({
    method: "GET",
    url: "https://ynet.co.il",
  });
  const news = [];
  const $ = cheerio.load(axiosResponse.data);
  $(".textDiv").each((index, element) => {
    const title = $(element).find("h2").text();
    const content = $(element).find("div").find("span").text();
    if (title && content) {
      const headline = { title: title, content: content };
      news.push(headline);
    }
  });
  res.status(200).json({ success: true, data: news });
});
