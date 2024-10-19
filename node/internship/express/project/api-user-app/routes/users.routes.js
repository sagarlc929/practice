// routes/users.routes.js
import express from 'express'
import { userRegister, userLogin, userHomePage, userGenerateAccessToken, handleUserLogout } from '../controllers/users.controller.js';
import authenticateToken  from '../middlewares/authenticateToken.middleware.js'
export const usersRouter = express.Router();
usersRouter.post('/register', userRegister);
usersRouter.post('/login', userLogin);
usersRouter.get('/home', authenticateToken, userHomePage);
usersRouter.get('/token', userGenerateAccessToken);
usersRouter.delete('/logout', handleUserLogout )
