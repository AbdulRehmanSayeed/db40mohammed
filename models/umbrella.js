const mongoose = require("mongoose") 
const umbrellaSchema = mongoose.Schema({ 
 colour: String, 
 height:Number , 
 prize:{
     type:Number,
     min: 6,
     max: 45 } 
}) 
 
module.exports = mongoose.model("umbrella", umbrellaSchema) 