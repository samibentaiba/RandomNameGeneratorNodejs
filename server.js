const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static("public"));

// Serve names data
app.get("/api/names", (req, res) => {
  const names = require("./data/names");
  const randomName = names[Math.floor(Math.random() * names.length)];
  res.json({ name: randomName });
});

// Serve the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
