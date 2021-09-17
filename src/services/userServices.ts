import { AUser, UserLogin } from '../interfaces/userInterface';
import UserModel from '../models/userModel';




class UserServices{
    async addUser(userData: AUser){

        // Check if the user exists 
        const existingUser = await UserModel
            .findOne({email: userData.email})

        // Throw error if there is any
        if(existingUser) throw new Error("User already exists")

        // Create a new user since there are now no duplicate
        const newUser = await UserModel.create(userData)

        return newUser
    }

    async login(loginDetails: UserLogin){
        // Check if the user exists 
        const existingUser = await UserModel
            .findOne({email: loginDetails.email})
        if(!existingUser) throw new Error("User not found")


        return existingUser
        
    }
    async getUsers(){
        const users = await UserModel.find();
        return users
    }
}

export default new UserServices()