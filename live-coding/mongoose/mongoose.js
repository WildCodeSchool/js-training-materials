//Get Mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: false
});

//Check Mongoose
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Mongoose Connection Success");
});

//Create a schema
var kittySchema = new mongoose.Schema({
  name: String,
  destination: String,
  height: String,
  expensive: Boolean
});

kittySchema.methods.speak = function() {
  var greeting = this.name ? "name is " + this.name : "No name";
  console.log(greeting);
  return "worked";
};

//Create a model
const Kitten = mongoose.model("Kitten", kittySchema);

//Add data to model
var silence = new Kitten({ name: "Silence", destination: "Home" });

var fluffy = new Kitten({ name: "fluffy", destination: "Work" });
//fluffy.speak();

//Submit model
fluffy.save(function(err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});

//Find kittens
//Kitten.find(function(err, kittens) {
//  if (err) return console.error(err);
//  console.log(kittens);
//});

//Find fluffy
Kitten.find({ name: /^fluff/ }, function(err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});

//Kitten.remove(function(err, kittens) {
//if (err) return console.error(err);
//console.log(kittens);
//});
