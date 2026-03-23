const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authRoute  = require('./routes/authRoutes');
const authMiddleware = require('./middlewares/authMiddleware')
const eventRoute = require('./routes/eventRoutes')

app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.json({message:"this is the entry"});
});

app.use('/api/auth',authRoute);
app.use('/api/events',eventRoute);



app.listen(3000,()=> console.log('Server riunning on port 3000'));

