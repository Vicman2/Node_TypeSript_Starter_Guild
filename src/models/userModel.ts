import { Schema, model, Model } from "mongoose";
import { AUser } from  "../interfaces/userInterface"


const UserSchema  = new Schema<AUser>({
    email: {
        type: String, 
        required: true
    }, 
    firstname:{
        type: String, 
        required: true
    }, 
    lastname:{
        type: String, 
        required: true
    }, 
    password: {
        type: String, 
        required: true
    }
})

const UserModel:Model<AUser>  = model("User", UserSchema)

export default UserModel