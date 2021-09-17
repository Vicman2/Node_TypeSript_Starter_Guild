import express from 'express'
import userCtrl from '../controllers/userCtrl'

const router = express.Router();

router.use('/addUser', userCtrl.addUser)


export default router