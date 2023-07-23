
const express = require("express")
const bodyparser = require("body-parser");
const cors = require("cors");
const port = 3000;
const app = express();



//routes import
var cutomerData = require("./routes/customer.routes");


app.get("/api",(req,res)=>{
    res.json({
        success: true,
        message:"this is testing api"
    });
});

app.use(cors());
app.use(bodyparser.json());

app.listen(port ,()=>{
    console.log("running on: " + port );
})
