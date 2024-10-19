const { readUsersFile, writeUsersFile } = require('../services/userService');
const { sendSuccessResponse, sendErrorResponse} = require('../middlewares/responseMiddleware');
const { searchPattern } = require('../utils/searchUtil');

const createUser = (req, res) => {
  const reqData = req.body;
  const users = readUsersFile();

  if(reqData.name && reqData.email && reqData.username && reqData.password){
    const newUser = {
      id: users.length > 0? users[users.length - 1].id + 1 : 1,
      name: reqData.name,
      email: reqData.email,
      username: reqData.username,
      password: reqData.password
    };

    users.push(newUser);
    writeUsersFile(users);

    sendSuccessResponse(res, 201, 'User created successfully', {id:newUser.id});
  } else {
    sendErrorResponse(res, 400, 'Please provide all fields.');
  }
};

const getUsers =(req, res) => {
  const queryId = req.query.id;
  const search = req.query.search;
  const users = readUsersFile();

  if(queryId) {
    const user = users.find(user =>user.id == queryId);

    if(user){
      sendSuccessResponse(res, 200, 'User found with queried id.',{user})
    } else {
      sendErrorResponse(res, 404, 'User not found with the given id');
    }
  } else if(search){
    const searchTerm = search.toLowerCase();
    const filteredUsers = users.filter(user =>
      searchPattern(user.name.toLowerCase(), searchTerm) ||
      searchPattern(user.email.toLowerCase(), searchTerm) ||
      searchPattern(user.username.toLowerCase(), searchTerm)
    );
    if(filteredUsers.length > 0){
      sendSuccessResponse(res, 200, `Search result for search = ${searchTerm}`, filteredUsers);
    } else{
      sendErrorResponse(res, 400, 'No result found for queried search.');
    }
  } else {
    sendSuccessResponse(res, 200, 'All users', users);
  }
};

const deleteUser = (req, res) =>{
  const queryId = req.query.id;
  const users = readUsersFile();
  const userIndex = users.findIndex(user => user.id == queryId);
  if(userIndex !== -1){
    const updatedUsers = users.filter(user => user.id !=queryId);
    writeUsersFile(updatedUsers);
    sendSuccessResponse(res,200, 'User deleted successfully', {id: queryId});
  } else {
    sendErrorResponse(res, 400, `User doesn't exist. i.e id=${queryId}`);
  }
};

const updateUser = (req, res) => {
  const reqData = req.body;
  const users = readUsersFile();
  const userIndex = users.findIndex(user=>user.id == reqData.id);
  if(userIndex !== -1){
    const updatedUser = {...users[userIndex], ...reqData};
    users[userIndex] = updatedUser;
    writeUsersFile(users);
    sendSuccessResponse(res, 200, 'User updated successfully', updatedUser);
  } else {
    sendErrorResponse(res, 404, 'User not found.');
  }
};

module.exports = {createUser, getUsers, deleteUser, updateUser};
