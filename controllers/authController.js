import usermodel from "../models/userModel.js"

export const registerController = async(req, res) => {
    try{
        const {name, email, password, phone, address} = req.body;
        if(!name){
            return res.send({error: "Name is required"});
        }
        if(!email){
            return res.send({error: "Email is required"});
        }
        if(!password){
            return res.send({error: "Passsword is required"});
        }
        if(!phone){
            return res.send({error: "Phone is required"});
        }
        if(!address){
            return res.send({error: "Address is required"});
        }
    } catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in registration",
            error
        })
    }
}
