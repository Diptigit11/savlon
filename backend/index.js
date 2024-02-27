const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')


mongoose.connect("mongodb://127.0.0.1:27017/todolist?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB: ', err);
  });

 // from express.js starter template
const app = express()
const port = 8000

app.use(cors())
app.use(express.json())      //middleware between thunderclient and terminal

app.use('/api/auth', require('./routes/auth'))            //Use the middleware defined in the file located at './routes/auth'. Apply this middleware to any route that starts with '/api/auth'.
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`to do list backend listening on port ${port}`)
})


