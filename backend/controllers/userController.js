import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

export const logIn = async (req, res) => {
  const {email,password}=req.body
  try {
    const user =await userModel.findOne({email}) //find mail
  
    //check user
    if(!user){
   return res.json({success:false,message:"user does not exist"})
  }

  //compare pass enter by user and saved user.pass
  const isMatch=await bcrypt.compare(password,user.password)
  if(!isMatch){
   return res.json({success:false,message:"invalid credentials"})
  }
  //create token
const token =createToken(user._id)
 return res.json({success:true,token})
  } catch (error) {
    console.log(error);
    
   return res.json({success:false,message:"error"})
    
  }
};

//create token for user register
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_JWT, { expiresIn: "7d" });
};
export const register = async (req, res) => {
  
  const { name, email, password } = req.body;
  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "user already exists" });
    }
    //check email is valid or not
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter valid email" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter strong password",
      });
    }

    //hashpassword using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //new user create
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    //save user in the database
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    return res.json({
      success: false,
      message: "error",
    });
  }
};
