const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const userTasks = require('./routes/tasks')
require('dotenv').config();

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
// Database connection
const { mongoURI } = require('./config/database');
mongoose.connect(mongoURI);

//any request http://localhost:300/api/users
app.use('/api/users', userRoutes)

app.use('/api/tasks', userTasks)


app.post('/newtask', (req, res)=>{});//POST request http://localhost:300/newtask

console.log(process.env.PORT)

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
