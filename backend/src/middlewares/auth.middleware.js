const jwt = require('jsonwebtoken')

async function userAuth(req,res,next) {
    const token = req.cookies.token
    if( !token ){
        return res.status(401).json({
            message : "Unauthorised"
        })
    }
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user = decode;
        console.log(decode);
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message : "Unauthorized 2"
        })
    }    
}

module.exports = {userAuth}