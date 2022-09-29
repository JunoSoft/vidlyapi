
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/kigaliapp");

const mongoSchema = new mongoose.Schema({
  name: String,
  age: Number,
  location: String,
});
const Person = mongoose.model("Person", mongoSchema);
async function displayPersons() {
const result = await Person.find({name:"DIDIER"});
console.log(result)
}
displayPersons();
