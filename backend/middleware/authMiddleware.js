const jwt =  require('jsonwebtoken')
module.exports.authMiddleware = async(req, res, next)=>{
    const {accessToken} = req.cookies

    if(!accessToken){
        return res.status(409).json({error:"Please Login First"})
    }
    else {
        //cookie will get expires in seven days so we need to check the token with try/catch block.
        try {
            const deCodeToken = await jwt.verify(accessToken, process.env.SECRET)
            req.role = deCodeToken.role
            req.id = deCodeToken.id
            next()//here we go for next function.
        } catch (error) {
            return res.status(409).json({error:'Please Login'})
        }
    }
}