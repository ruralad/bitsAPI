const express = require("express");
const fetch = require("node-fetch");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

function checkout() {
  app.get("/", (req, res) => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=13a6f4f48d1f462c84490bae6e9e105a"
    )
      .then(res => res.json())
      .then(json =>
        fs.writeFile("public/input.json", JSON.stringify(json), function(err) {
          if (err) throw err;
          res.send(
            "bits relay is working 24h bois. you are seeing some serious dedication here!"
          );
        })
      );
  });
}
checkout();
app.use(express.static("public"));
app.listen(port);
