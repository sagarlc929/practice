// models/refreshToken.model.js
import mongoose from 'mongoose'
const refreshTokenSchema = new mongoose.Schema({
  refreshToken: {type:String, required: true},
  createdAt: {type: Date, default: Date.now}
});

export default mongoose.model('refreshToken', refreshTokenSchema);
