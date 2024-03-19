const Admin = require('../models/admin')
const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next)=> {
    let token;
    // checking if there is a Bearer token in the headers
    if(req?.headers?.authorization?.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1]
        try {
            if (token) {
                // if there is token, we verify the token with the secret key
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
                const user = await Admin.findById(decoded?.id);
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error("Token expired, please login again")
        }
    } else {
        throw new Error('There is no token attached to the header')
    }
}

const isAdmin = async (req, res, next) => {
    const { email } = req.user
    const User = await Admin.findOne({ email })

    // Checking to see if the loggedin user is an admin
    if (User.isAdmin === false){
        throw new Error("You are not an admin")
    } else {
        next();
    }
}

module.exports = { isAdmin, authMiddleware }