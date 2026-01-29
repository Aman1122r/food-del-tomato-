import jwt from "jsonwebtoken";
//middleware for check token 
const authMiddleware = async (req, res, next) => {
  const { token } = req.headers; 
  if (!token) {
    return res.json({ success: false, message: "Not authorized login again" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.SECRET_JWT);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"error"})
    
  }
};
export default authMiddleware;
