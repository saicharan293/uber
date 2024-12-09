const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db')
const UserRoutes = require('./routes/UserRoutes')
const CaptainRoutes = require('./routes/CaptainRoutes')

connectToDb()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get('/', (req,res)=>{
    res.send("Hello")
})

app.use('/users', UserRoutes)
app.use('/captains', CaptainRoutes)

module.exports=app;