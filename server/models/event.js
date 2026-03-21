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
        type:Number,
        
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
        default:100
     },
     cachedAt:{type:Date,defualt:Date.now}}, {timestamps:true})