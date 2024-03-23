import admin from "../../config/firebaseAdminConfig.js"
import users from "../../schema/userSchema.js"


const registerUserService = async (email,password,firstname,lastname) => {

    try {
        const userRegisteredInFirebase = await registerUserWithFirebase(email,password,firstname,lastname)
        const userRegisteredInDatabase = await registerUserInDatabase(email,password,`${firstname} ${lastname}`)
        return userRegisteredInDatabase
    } 
    
    catch (error) {
        throw new Error("Registration failed", error)
    }
}



const registerUserWithFirebase = async(email,password,firstname,lastname) => {
    const user = await admin.auth().createUser({
        email,
        password,
        displayName : `${firstname} ${lastname}`
    })

    return user
}

const registerUserInDatabase = async(email,password,username) => {
    const user = await users.create({email,password,username})
    return user
}


export {registerUserService}