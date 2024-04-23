import User from "../Model/user.model"
import { errorHandler } from "../utils/error"


export const signin = async ( req, res ,next ) => {
    const { email, password } = req.body
    try {
        const validUser = await User.findOne( { email } )
        if(!validUser) return next(errorHandler(404,'user not found'))
        
    }
    catch ( error ) {
        next(error)
    }
}
