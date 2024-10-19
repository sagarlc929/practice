// const express = require('express');
import express from 'express';
// const { createUser, getUsers, deleteUser, updateUser }  = require ('../controllers/userController');
import { createUser, getUsers, deleteUser, updateUser} from '../controllers/userController.js';


export const router = express.Router();

router.post('/users',createUser);
router.get('/users',getUsers);
router.delete('/users', deleteUser);
router.patch('/users', updateUser);

