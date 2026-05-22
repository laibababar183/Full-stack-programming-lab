const express = require("express");
const axios = require("axios");
require("dotenv").config();
const app = express();

app.get("/news/:country", async (req, res) => {
  const country = req.params.country;
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=5&apiKey=${process.env.NEWS_KEY}`
    );

    if (response.data.totalResults === 0) {
      return res.status(404).json({ error: "No news found for this country" });
    }

    const articles = response.data.articles.map((article) => ({
      title: article.title,
      source: article.source.name,
      url: article.url,
      publishedAt: article.publishedAt,
    }));

    res.json({
      country: country,
      totalResults: articles.length,
      articles: articles,
    });
  } catch (err) {
    res.status(500).json({
      error: "API error",
      detail: err.response?.data || err.message,
    });
  }
});

app.listen(3000, () => console.log("News API running on port 3000"));