import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import { router as routes } from './routes/routes.js'
const PORT = 3000;
const app = express();
const mongoString = process.env.DATABASE_URL;

app.use(express.json());

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error)=>{
  console.log(error);
});
database.once('connected',()=>{
  console.log('Database connected');
})
app.use('/api', routes);
app.listen(PORT, ()=>{
  console.log(`Server Started at ${PORT}`);
});
