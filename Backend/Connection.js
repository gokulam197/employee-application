var express = require("express");

var morgan = require("morgan"); require("dotenv").config();

const studentRoute = require("./routes/studentRoute");
require("./db/dbConnection");

var app = express();

app.use(morgan("dev"));

app.use("/api", studentRoute);

app.listen(process.env.port, () => {

console.log(`Listenting to port ${process.env.port}`); 
});