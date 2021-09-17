import * as http from 'http'
import dotenv from 'dotenv'
import express from 'express'
const app = express()
const server = http.createServer(app)
require('express-async-errors')

dotenv.config()


import starterMiddleWares from './src/middlewares/starterMiddleware'
import  constants from  './src/config/constants'
import database from './src/config/database'
import errorHandler from './src/middlewares/errorMiddileware'
import apiRoutes from './src/routes/rootRoute'

starterMiddleWares(app)

//endPoint
app.use('/api', apiRoutes)


// Error Middleware
app.use(errorHandler)


const port  = constants.PORT || 2021
server.listen(port, () => {
    database()
    console.log(`Listening on port ${port}`)
})

server.on('error', error => {
    console.log(`Error occured on the server ${error}`)
})