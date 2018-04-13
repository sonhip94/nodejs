var express = require("express");
var ejs = require("ejs");
var app = express("view engine", "ejs");



app.listen(3000, () => {
	console.log("Server is", 3000);
});