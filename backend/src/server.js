import express from "express";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

// Endpoint to receive sensor data
app.post("/data", (req, res) => {
  console.log("Received sensor data:", req.body);
  res.status(200).json({ message: "Data received" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
