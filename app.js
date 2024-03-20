const express = require("express");
const cors = require("cors");
const libraryRouters = require("./routes/routers");
const app = express();
app.use(cors());



app.use(cors({ origin: ["http://127.0.0.1:5501"] }));
app.use(express.json());

app.use("/library", libraryRouters);

module.exports = app;