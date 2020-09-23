const express = require("express");
const app = express();
const path = require("path");
const jsonServer = require("json-server");
const { fetchData } = require("./fetch-gsi");
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3001;

app.get("/api/forecast/:zipCode", async function (req, res) {
  const { zipCode } = req.params;
  const zipForecast = await fetchData(zipCode);
  res.send(zipForecast);
});

app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
app.use(router);
app.use(middlewares);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
