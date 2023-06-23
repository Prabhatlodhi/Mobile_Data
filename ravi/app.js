require('dotenv').config()
require('express-async-errors')
//async errors

const express = require('express');
const app = express();

const connectDB = require('./db/connect')

const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())

//rooted

app.get('/',(req,res)=>{
    res.send('<h1>fffff</h1><a href="/api/v1/products" >final link</a>')
})

//routes

app.use('/api/v1/products', productsRouter)



app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()


console.log('llll API Gg')
