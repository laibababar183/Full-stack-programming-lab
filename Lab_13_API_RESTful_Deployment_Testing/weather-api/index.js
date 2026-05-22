const express = require("express");
const axios = require("axios");
require("dotenv").config();
const app = express();

app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_KEY}&units=metric`
    );
    const d = response.data;
    res.json({
      city: d.name,
      temperature: d.main.temp,
      condition: d.weather[0].description,
      humidity: d.main.humidity,
    });
  } catch (err) {
    res.status(404).json({ 
      error: "City not found or API error",
      detail: err.response?.data || err.message
    });
  }
});

app.listen(4000, () => console.log("Weather API running on port 4000"));