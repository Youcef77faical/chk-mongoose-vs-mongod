const mongoose = require("mongoose")
//define the shema for the 'person' model


//Define the schema for the 'Person' model
const personShema = new mongoose.Schema({
name:String,
age:Number,
favoriteFoods:String
})
//
const Person = mongoose.model('person',personShema)
module.exports= Person;