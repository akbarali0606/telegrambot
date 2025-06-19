const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot tirik!");
});

app.listen(3000, () => {
  console.log("keep_alive.js server ishlayapti!");
});
