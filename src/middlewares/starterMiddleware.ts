import cors from 'cors'
import helmet from  'helmet'
import  express from  'express'


export default  function(app:  express.Application){
    app.use(cors())
    app.use(helmet())
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
}