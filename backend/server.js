const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const dataRouter = require('./routes/data');

require ('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//using the dataRouter and userRouter
app.use('/data',dataRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true , useUnifiedTopology:true , })

const connection = mongoose.connection;
connection.once('open',() =>{
    console.log('Mongodb dtabase connecteed succefully');
})

app.listen(port,() => {
    console.log(`server is running on port : ${port}`);
});