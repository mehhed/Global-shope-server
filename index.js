const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//  middle were
app.use(cors());

//  CURD site
app.get("/", (req, res) => {
  res.send("this is the global shope server");
});

app.listen(port, () => {
  console.log(`globar shope server running on : ${port}`);
});
