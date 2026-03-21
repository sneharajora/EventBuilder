const mongoose = require("mongoose");

const eventSchema =  new mongoose.Schema( {
     ticketmasterId:{
          type:String,
          unique:true
     },
     title:{
        type:String,
       
     },
     description:{
        type:String,
       
     },
     date:{
        type:String
        
     },
     venue:{
        type:String,
     },
     city:{
        type:String,
        
     },
     category:{
        type:String
     },
     image:{
        type:String
     },
     ticketmasterUrl:{
        type:String
       
     },
     totalSeats:{
        type:Number,
        default:100
     },
     bookedSeats:{
        type:Number,
        default:0
     },
     cachedAt:{type:Date,default:Date.now}}, {timestamps:true});

     const Event = mongoose.model('Event',eventSchema);

     module.exports = Event