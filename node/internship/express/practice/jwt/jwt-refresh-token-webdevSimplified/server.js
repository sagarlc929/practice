import express from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
const app = express()
app.use(express.json());

const posts = [
  {
    username:"summer",
    title:"summer post 1"
  },
  {
    username: 'Jim',
    title: 'my post 1'
  },
  {
    username: "summer",
    title:"haze post 2"
  }
]

app.get('/posts', authenticateToken, (req,res)=>{
  res.json(posts.filter(post=>post.username === req.user.name))
})

// Middleware to Authenticate
function authenticateToken(req,res,next){
  // Bearer TOKEN
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
    if(err) return res.sendStatus(403)
    req.user = user
    next()
  })
}
app.listen(3000)

