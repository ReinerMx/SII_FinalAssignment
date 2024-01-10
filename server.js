const express = require("express");
const path = require("path");
const app = express();
const port = 3333;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "sii.html"));
});

app.listen(port, () => {
  console.log(`Die Anwendung ist unter http://localhost:${port} verfügbar.`);
});
