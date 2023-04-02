const express = require("express");
const bodyParser = require("body-parser");
// const { router } = require("./routes/data");
const router = require("./routes/data");

const app = express();
app.use(bodyParser.json());

app.use("/api/v1/people", router);
app.listen(5000, console.log("The app is listend at port 5000"));
