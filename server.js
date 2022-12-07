
const express = require("express")
const bodyparser = require("body-parser");
const cors = require("cors");
const port = 3000;
const sql = require("./db.js")

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.listen(port ,()=>{
    console.log("running on: " + port );
})
