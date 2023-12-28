const express = require('express');
const app = express();
const env = require('dotenv').config();
const port = process.env.PORT || 5000;

//connecting to database
require("./db/db");

//json parsing
app.use(express.json());

//routes
app.use(require("./routes/playerRoutes"));

app.listen(port, ()=>{
    console.log("Listening on port "+port);
})