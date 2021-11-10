const mongoose = require("mongoose") 
const umbrellaSchema = mongoose.Schema({ 
 colour: String, 
 height: Number, 
 prize: Number 
}) 
 
module.exports = mongoose.model("umbrella", umbrellaSchema) 