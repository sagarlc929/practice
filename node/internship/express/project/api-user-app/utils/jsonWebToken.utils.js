import jwt from 'jsonwebtoken'
import 'dotenv/config'
import saveRefreshToken from '../helpers/handleRefreshTokenWithDB.helper.js'

export const generateAccessToken = (user)=>{
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '10m'})
}
export const generateRefreshToken = (user)=>{
  const signedRefreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
  saveRefreshToken(signedRefreshToken);
  return signedRefreshToken;
}
