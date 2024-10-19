// controllers/users.controller.js
import validateRegistrationFrom  from '../utils/formValidation.utils.js';
import { generateAccessToken, generateRefreshToken } from '../utils/jsonWebToken.utils.js'
import  UserModel  from '../models/users.models.js'
import checkRefreshTokenExists from '../helpers/handleRefreshTokenWithDB.helper.js'

export const userRegister = async (req,res) => {
  const reqData = req.body;
  if(validateRegistrationFrom(reqData)){
    const newUser =  new UserModel({
      username: reqData.username,
      email: reqData.email,
      password: reqData.password
    })
    try{
      const dataToSave = await newUser.save();
      res.status(200).json(dataToSave);
    } catch (error){
      res.status(400).json({message: error.message})
    }
  }
}
export const userLogin = async (req,res) =>{
  const username = req.body.username;
  const user = {name: username};
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  res.json({accessToken: accessToken, refreshToken: refreshToken});
}
export const userHomePage = async (req,res)=>{
  res.json({page: "homepage"});
}

export const userGenerateAccessToken = async (req,res) =>{
  const refreshToken = req.body.token;
  if(refreshToken == null) return res.sendStatus(401);
  if(checkRefreshTokenExists(refreshToken)){
    // const accessToken = generateAccessToken(user)g
  }
}
export const handleUserLogout  = async (req,res) => {
  const refreshToken = req.body.token;
  if(refreshToken == null) return res.sendStatus(401);
  if
}
