const express = require("express");
const app = express();
const port = 8080;
app.use(express.json());
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());

app.post("/text", (req, res) => {
  const data = req.body;
  res.json({
    data,
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
