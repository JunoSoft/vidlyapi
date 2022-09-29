
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/kigaliapp");

const mongoSchema = new mongoose.Schema({
  name: String,
  age: Number,
  location: String,
});
const Person = mongoose.model("Person", mongoSchema);
async function displayPersons() {
return  await Person
.find()
.or([{name:"UBANJE"},{age:{$lte:10}}])
.select("name")

}
async function run(){
  const persons = await displayPersons();
  console.log(persons)
}
run();
