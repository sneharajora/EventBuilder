const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();



app.get('/',(req,res)=>{
    res.json({message:"this is the entry"});
});

app.listen(3000,()=> console.log('Server riunning on port 3000'));

