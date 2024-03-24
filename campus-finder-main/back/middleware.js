const jwt=require('jsonwebtoken')
const JWT_SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdiNTM0Yzk4ODY3YzFlZmMwODBhNDkiLCJyb2xlIjoidXNlciIsImlhdCI6MTY2OTAzODI1NSwiZXhwIjoxNjY5MDQxODU1fQ.L009Kkq2Ru1qAjiibtXu9ZRo6v3KkC95aMWHKdsBfYo"
exports.requireSignin=(req,res,next)=>{
    // console.log(req)
    console.log("Inside require sign in ",req.headers.authorization)
    if(req.headers.authorization){
        console.log("Header Verification")
        // console.log("Request is : ",req.body)
        const token=req.headers.authorization.split(" ")[1]
        // console.log(token)
        const user =jwt.verify(JWT_SECRET)
        // console.log("User is : ",user)
        req.user=user
        req.role='user'
        next()
    }
    else{
        console.log("No Authorization")
        res.status(400).json({message:"No Authorization"})
    }
}

exports.userMiddleware=(req,res,next)=>{
    // console.log("Username is : ",req.role)
    console.log("Inside usermiddleware")
    if(req.role!="user"){
        return res.status(400).json({message:"Access Denied"})
    }
    next()
}

