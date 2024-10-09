const express = require('express');
const { createUser, getUsers, deleteUser, updateUser }  = require ('../controllers/userController');

const router = express.Router();

router.post('/users',createUser);
router.get('/users',getUsers);
router.delete('/users', deleteUser);
router.patch('/users', updateUser);

module.exports = router;
