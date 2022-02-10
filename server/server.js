const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')

require('dotenv').config();
const { readdirSync } = require('fs')
const path = require('path')
const app = express();
// Static file
app.use(express.static('public'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')))

    app.get("*", (req,res) => {
        res.senFile(path.join(__dirname , "../build/index/html"))
    })
}

//connectDB 
connectDB();




// middleware
app.use(morgan("dev"))
app.use(bodyParser.json({ limit: "2mb" }))
app.use(cors())

// Auto Route
readdirSync('./routes').map(r => app.use("/api",require('./routes/' + r)))


const port = process.env.PORT || 5000;

app.listen(port,()=> {
    console.log('server is runing on port ' + port)
})