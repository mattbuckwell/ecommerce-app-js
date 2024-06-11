// require in express library
const express = require("express");
// use the express library to create a variable
const app = express(); // an object that describe all the things our web server can do

// -- route handler --
// req = request - an object representing the incoming request from the browser into our webserver
//  ~ if you ever need to receive information coming from a user it will be in req
// res = response - represents the outgoing response from our web server to the browser
//  ~ if you ever need to communicate with the user or browser it will be from the res
app.get("/", (req, res) => {
  // send a greeting to who ever made a request to my web server
  res.send("hi there!!");
});

// tell the aplication to start listening for network requests
app.listen(3000, () => {
  console.log("listening");
});
