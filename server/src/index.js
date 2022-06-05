// node modules:
import cors from "cors";
import axios from "axios";
import express from "express";
import searchApi from "./search.js";
import path, { dirname } from "path";

// express config:
const app = express();
const port = 3000;

// express middleware:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// fix cors:
app.use(cors());
app.options("*", cors());

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

// send image by url:
app.get("/api/images", async (req, res) => {
  let link = req.query.link;
  try {
    const response = await axios({
      method: "GET",
      url: link,
      responseType: "stream",
    });
    response.data.pipe(res);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// express server:
app.listen(port, () => {
  console.log(`app serve on : http://localhost:${port}`);
});
