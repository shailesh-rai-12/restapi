const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const mongoose= require('mongoose')


//acccessing env
require('dotenv/config');

//importing routes
const employeeRoutes=require('./routes/employees');
const studentRoutes=require('./routes/students');
const userRoutes=require('./routes/users');

//body parser
app.use(bodyParser.json());

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if(req.method === 'OPTIONS')
  {
    res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
    return res.status(200).json({});

  }
  next();

});

app.use('/',employeeRoutes);
app.use('/',studentRoutes);
app.use('/',userRoutes);


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
// .catch(err=>{
// console.log(err);
// })
//port
app.listen(3000);
