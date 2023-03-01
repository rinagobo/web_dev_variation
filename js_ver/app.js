//jshint esversion:6

//Set required modules or packages
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require('nodemailer');

//Create express server
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


//Home for the website
app.get("/", function(req, res){
  res.render("home");
});

//Contact page for the website
app.get("/contact", function(req, res){
  res.render("contact");
});

//Route for sending an email
app.post("/contact", function(req, res){
  //  Create content for an email message using the input from contact form
  const text = "Name: " + req.body.name +
    "\nEmail: " + req.body.email +
    "\nPhone: " + req.body.phone +
    "\nMessage: " + req.body.message

  console.log(text);

  //  Create an function for sending an email with nodemailer
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: ''
    }
  });

  var mailOptions = {
    from: '',
    to: '',
    subject: 'Sending Email using Node.js',
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.redirect("/");
  });

//Details page for each art (not completed yet)
//app.post("/details", function(req, res){
//  const clicked_pic = req.body.details;
//
//  if (clicked_pic === "details1" || clicked_pic === "details2"){
//    res.render("details_v", {
//      clicked_pic: clicked_pic
//    });
//  } else {
//    res.render("details_s", {
//      clicked_pic: clicked_pic
//    });
//  }
//
//
//});



app.listen(3000, function(){
  console.log("Server started on port 3000");
});
