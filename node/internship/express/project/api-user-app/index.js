// index.js
import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config';
import { usersRouter as usersRoutes } from './routes/users.routes.js'

const mongoString = process.env.DATABASE_URL;

const app = express();
app.use(express.json());

mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error',(error)=>{
  console.log(error)
})
database.once('connect', ()=>{
  console.log('Database connected')
})

app.use('/api', usersRoutes);
app.listen(process.env.PORT);
