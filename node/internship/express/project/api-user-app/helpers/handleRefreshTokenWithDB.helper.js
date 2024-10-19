import RefreshTokenModel from '../models/refreshToken.model.js'

export default async function  saveRefreshToken(signedRefreshToken){
  const newRefreshToken = new RefreshTokenModel({
    refreshToken: signedRefreshToken
  })
  try{
    const tokenToSave = await newRefreshToken.save();
    console.log(tokenToSave);
    // res.status(200).json(tokenToSave);
  } catch (error){
    console.log(error.message);
    // res.status(400).json({message:error.message});
  }
}

export async function checkRefreshTokenExists(refreshToken){
  try{
    const tokenEntry = await RefreshTokenModel.findOne({refreshToken: refreshToken});
    if(tokenEntry){
      //Token exits
      console.log('Refresh token exitst', tokenEntry);
      return true
    } else {
      // Token does not exist
      console.log('Refresh token does not exits.');
      return false;
    }
  } catch (error) {
    console.log('Error checking refresh token:',error);
    throw error; 
  }
}

export async function removeRefreshToken(refreshToken){
  try{
    const result = await RefreshTokenModel.deleteOne({refreshToken: refreshToken});
    if(result.acknowledged && deletedCount === 1) {
      console.log("Token deleted successfully")
    } else {
      console.log("No token found or already deleted.")
    }
  } catch (error){
    console.error("Error deleting token", error);
  }
}
