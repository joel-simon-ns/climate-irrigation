// Load environment variables from .env
require("dotenv").config();

const express = require("express");
const axios = require("axios"); // <--- Add this
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

// Status route
app.get("/status", (req, res) => {
  res.json({ 
    message: "Server is healthy ✅",
    port: PORT 
  });
});

// Test route
app.get("/test", (req, res) => {
  res.send("Test route works ✅");
});

// Dynamic Weather route
// 3-hour forecast route
app.get("/forecast", async (req, res) => {
  try {
    const city = req.query.city || process.env.DEFAULT_CITY;
    const units = process.env.DEFAULT_UNITS;
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const baseUrl = process.env.OPENWEATHER_BASE_URL;

    // Use the forecast endpoint instead of weather
    const response = await axios.get(`${baseUrl}/forecast`, {
      params: { q: city, units: units, appid: apiKey }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch forecast data" });
  }
});


// Weather status route
app.get("/weather/status", (req, res) => {
  res.json({ message: "Weather route is healthy ✅" });
});

// Route to receive sensor data from ESP32
app.post("/sensor-data", (req, res) => {
  const { soilMoisture, temperature } = req.body;

  if (!soilMoisture || !temperature) {
    return res.status(400).json({ error: "Missing sensor data" });
  }

  console.log("Received sensor data from ESP32:", req.body);

  // TODO: Save data to database or file if needed

  res.json({ message: "Sensor data received ✅" });
});

// Simple pump status (can later be dynamic based on soil moisture)
let pumpStatus = "OFF";

// Route for ESP32 to get pump status
app.get("/pump-status", (req, res) => {
  res.json({ pumpStatus });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
