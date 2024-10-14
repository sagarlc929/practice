// const express = require('express');
import express from 'express';
// const userRoutes = require('./routes/userRoutes');
import {router as userRoutes} from './routes/userRoutes.js';
// const reqLogger  = require('./middlewares/reqLogger');
import { reqLogger } from './middlewares/reqLogger.js';
// const addTimestamp = require('./middlewares/addTimestamp');
import { addTimestamp } from './middlewares/addTimestamp.js';
import 'dotenv/config'

const app = express();
app.use(express.json());
app.use(addTimestamp);
app.use(reqLogger);
// Use user routes.
app.use('/api', userRoutes);

app.listen(process.env.PORT, ()=>{
  console.log(`Server listening on ${process.env.PORT}`);
});
