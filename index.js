const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  req.send("hello world");
});

app.post("/text", (req, res) => {
  const data = req.body;
  res.json({
    data,
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log("app listen on port", port);
});
