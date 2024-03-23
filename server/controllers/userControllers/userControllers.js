import { registerUserService } from "../../services/userServices/userServices.js"

const registerUser = async (req,res) => {
    const {email,password,confirmPassword,firstname,lastname} = req.body

    try {
    
        if(!email){
            throw new Error("Email is not provided")
        }

        if(!password){
            throw new Error("Password is not provided")
        }

        if(password !== confirmPassword){
            throw new Error("Password does not match")
        }

        if(!firstname){
            throw new Error("firstname is not provided")
        }
        
        if(!lastname){
            throw new Error("lastname is not provided")
        }
        
        const registeredUser = await registerUserService(email,password,firstname,lastname)
        res.status(201).send({
            status: "Successfull",
            data : {
                message : "User has been successfully created",
                response : registeredUser
            }
        })
        
    }
    
    catch (error) {
        res.status(error?.status || 500).send({
            status: "Unsuccessfull",
            data : {
                error : error?.message || error
            } 
        })
    }
}

export {registerUser}