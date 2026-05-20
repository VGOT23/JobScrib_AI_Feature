async function userAuth(req,res,next) {
    const token = req.cookies.token

    if( !token ){
        return res.status(401).json({
            message : "Unauthorised"
        })
    }

    const decode = jwt.verify(token,process.env.JWT_SECTET_KEY)
    req.user = decode
    

}

module.exports = {userAuth}