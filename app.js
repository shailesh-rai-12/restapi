const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const mongoose= require('mongoose')
//acccessing env
require('dotenv/config');

//importing routes
const routes=require('./routes/employees');

//body parser
app.use(bodyParser.json());

app.use('/',routes);


//database
mongoose.connect(process.env.DB_CONNECTION,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true,
  },
()=>{
  console.log('connected to DB');
})
.catch(err=>{
console.log(err);
})
//port
app.listen(3000);
