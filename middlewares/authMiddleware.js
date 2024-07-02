import JWT from 'jsonwebtoken';

// token based protected routes

export const requireSignIn = async (req, res, next) => {
    try{
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        next();
    } catch(error){
        console.log(error);
    }
};
