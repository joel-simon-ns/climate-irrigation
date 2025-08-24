const express = require("express");
const app = express();
const PORT = 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

// Status route
app.get("/status", (req, res) => {
  res.json({ message: "Server is healthy ✅" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
