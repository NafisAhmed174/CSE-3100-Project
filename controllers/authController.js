import { hashPassword } from "../helpers/authHelper";
import userModel from "../models/userModel.js"

export const registerController = async(req, res) => {
    try{
        const {name, email, password, phone, address} = req.body;
        if(!name){
            return res.send({error: "name is required"});
        }
        if(!email){
            return res.send({error: "email is required"});
        }
        if(!password){
            return res.send({error: "passsword is required"});
        }
        if(!phone){
            return res.send({error: "phone is required"});
        }
        if(!address){
            return res.send({error: "address is required"});
        }

        // existing user
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.send.status(200).send({
                success: true,
                message: "already registered please login "
            })
        }

        // register user
        const hashedPassword = await hashPassword(password);
        // save
        const user = await new userModel({name, email, phone, address, password:hashedPassword}).save();

        res.status(201).send({
            success: true, 
            message: "User registerrd Successfully",
            user
        })

    } catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in registration",
            error
        })
    }
}
