// node modules:
import express from "express";
import path, { dirname } from "path";
import searchApi from "./search.js";

// express config:
const app = express();
const port = 3000;

// express middleware:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// server route:
const buildPath = path.resolve(dirname("./"), "../client/build");
app.use(express.static(buildPath));

const indexPath = path.resolve(dirname("./"), "../client/build/index.html");
app.get("/", (req, res) => {
  res.sendFile(indexPath);
});

// api routes:
app.get("/api", async (req, res) => {
  let data = await searchApi(req.query.name || "");
  if (data.length === 0) {
    res.status(404).send("no results found use, ?name=<videoname>");
  } else {
    return res.status(200).send(data);
  }
});

// getlink route:
app.get("/api/link", async (req, res) => {
  let data = req.query.link;
  if (data.length === 0) {
    res.status(404).send("no results found use, ?link=<videoname>");
  } else {
    console.log(req.query.link);
    return res.status(200).send(data);
  }
});

// express server:
app.listen(port, () => {
  console.log(`app serve on : http://localhost:${port}`);
});
