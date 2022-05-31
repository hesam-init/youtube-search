// node modules:
import express from "express";
import searchApi from "./search.js";

// express config:
const app = express();
const port = 3000;

// express middleware:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express routes:
app.get("/", async (req, res) => {
  let data = await searchApi(req.query.name || "");
  if (data.length === 0) {
    res.status(404).send("no results found use ?name=<videoname>");
  } else {
    return res.status(200).send(data);
  }
});

// express server:
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
