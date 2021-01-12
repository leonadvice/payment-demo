const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 9333;

app.use(express.json());
app.get("/", (req, res) => res.send("payment test demo"));
app.all("/approve", (req, res) => {
  console.log("request received");
  console.log(req.body.test);
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`App is listen on port ${PORT}`);
});
