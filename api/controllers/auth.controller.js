import bcryptjs from 'bcryptjs';
import User from "../models/user.model.js";
import { errorHandler } from '../utils/error.js';

export const signup = async (req , res , next) => {
    const {username , password , email} = req.body;
    const hashedPassword = bcryptjs.hashSync(password , 10);
    const user = new User({username , password : hashedPassword, email});
    try{
        
        await user.save();
        res.status(200).json("user created successfully!!!")
    }
    catch(error){
        next(errorHandler(550, "ayush problem"));
    }
    
}