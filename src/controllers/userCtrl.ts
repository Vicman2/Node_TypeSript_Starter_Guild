import express from 'express'
import UserServices from '../services/userServices';

class UserCtrl{
    async addUser(req: express.Request, res: express.Response){
        const userData = req.body;
        const response = await UserServices.addUser(userData)
        res.send({
            status: true, 
            message: "User created successfully",
            data: response
        })
    }
    async fetchUsers(req: express.Request, res: express.Response){
        const response = await UserServices.getUsers()
        res.send({
            status: true, 
            message: "User created successfully", 
            data: response
        })
    }

    async loginUser(req:express.Request, res: express.Response){
        const loginDetails = req.body
        const response = await UserServices.login(loginDetails)
        res.send({
            status: true,
            message: "User loged successfully", 
            data: response
        })
    }
}

export default new UserCtrl()