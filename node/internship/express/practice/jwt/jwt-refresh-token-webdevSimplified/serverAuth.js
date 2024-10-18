import express from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
const app = express()

let refreshTokens = [];

app.use(express.json());
app.delete('/logout', (req,res)=>{
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})
app.post('/token',(req,res)=>{
  const refreshToken = req.body.token;

  if(refreshToken == null)  return res.sendStatus(401);
  if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
    if(err) return res.sendStatus(403);
    const accessToken= genereateAccessToken({name: user.name})
    res.json({ accessToken: accessToken });
  })
})
app.post('/login', (req,res)=>{
  // Authenticate User
  const username = req.body.username;
  const user = {name: username}

  const accessToken = genereateAccessToken(user);
  const refreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  res.json({ accessToken: accessToken, refreshToken: refreshToken })
})

function genereateAccessToken(user){
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '20s'})
}
app.listen(4000)

