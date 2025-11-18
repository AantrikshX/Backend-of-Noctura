const express = require("express");
const app = express();
const Api = require("./api");
const cors = require("cors");
require("dotenv").config();


// CORS + Preflight
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get("/", (req, res) => {
  res.send("HI");
});

app.use("/api", Api);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
