const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 4000
const app = express();

app.use("/assets", express.static(`${__dirname}/assets`));

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: `${__dirname}` });
});

app.listen(PORT, function () {
  console.log(`your server is running on localhost:${PORT}`)
});
