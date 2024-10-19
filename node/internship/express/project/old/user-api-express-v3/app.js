import express from 'express';
import {router as userRoutes} from './routes/userRoutes.js';
import { reqLogger } from './middlewares/reqLogger.js';
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
