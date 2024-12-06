const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors')
const connectToDb = require('./db/db')
const UserRoutes = require('./routes/UserRoutes')

connectToDb()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    res.send("Hello")
})

app.use('/users', UserRoutes)

module.exports=app;