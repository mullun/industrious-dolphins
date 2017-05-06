// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require User Schema
var User = require('./models/User.js');
var Group = require('./models/Group.js');

//Require Tool Schema
var Tool = require('./models/Tool.js');

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8080;
// var PORT = 8080;

// Run Morgan for Logging middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ensure that public folder is the default for files
app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration
mongoose.connect("mongodb://localhost/toolshare");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve or to post data to db.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  // History.find({}).sort([
  //   ["date", "descending"]
  // ]).limit(5).exec(function(err, doc) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
  //     res.send(doc);
  //   }
  // });
});

app.get("/mytools", function(req, res){
 console.log("Information: " + req.body);
 User.find({}).exec(function(err, doc){
    if (err) {
      console.log(err);

    } else {
      res.send(doc);
    }
 });

});

// This is the route we will send POST requests to save user data to db.
app.post("/submitUser", function(req, res) {
  console.log("BODY: " + req.body);

  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  User.create({
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    groupId:"3", // dummy data
    date: Date.now()
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved User");
    }
  });
});

// -------------------------------------------------
// This is the route we will send POST requests to save a group name to db.
app.post("/createGroup", function(req, res) {
  console.log("BODY: " + req.body);

  // Here we'll save the group name based on the JSON input.
  // We'll use Date.now() to always get the current date time
  Group.create({
    groupName: req.body.groupName,
    date: Date.now()
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Group Name");
    }
  });
});

//Add tool to database
app.post("/submitTool", function(req, res){
  console.log("addTool BODY: ");
  console.log(req.body);

  var user = 111111111;

  Tool.create({
    toolName: req.body.toolName,
    toolPrice: req.body.toolPrice,
    toolCondition: req.body.toolCondition,
    toolStatus: true,
    toolHeldBy: user,
    toolMaxDays: req.body.toolMaxDays,
    toolUrl: req.body.toolUrl,
    toolOwner: user,
    toolCreateDate: Date.now()
  }, function(err){
    if(err) {
      console.log(err);
    } else {
      res.send("Saved Tool")
    }
  })

});

app.get("/getTools", function(req, res){
  Tool.find({}).exec(function(err, doc){
    if(err){
      console.log(err);
    }else{
      console.log(doc);
      res.send(doc);
    }
  });
});

// -------------------------------------------------
// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});