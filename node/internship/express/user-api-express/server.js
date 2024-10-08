
const express = require('express');
const path = require('path');
const fs = require('fs');

const port = 5000;
const app = express();
const userInfoPath = path.join(__dirname, 'database.json');

// Middleware to parse JSON
app.use(express.json());

// Helper functions
function readUsersFile() {
  const userData = fs.readFileSync(userInfoPath, 'utf8');
  return JSON.parse(userData);
}

function writeUsersFile(users) {
  const updatedUserFileContent = JSON.stringify(users);
  fs.writeFileSync(userInfoPath, updatedUserFileContent, 'utf8');
}

function searchPattern(sentence, pattern) {
  const regex = new RegExp(pattern, 'g');
  const matches = sentence.match(regex);
  return matches ? true : false;
}

// Create a user (POST)
app.post('/api/users', (req, res) => {
  const reqData = req.body;
  const users = readUsersFile();

  if (reqData.name && reqData.email && reqData.username && reqData.password) {
    const newUser = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
      name: reqData.name,
      email: reqData.email,
      username: reqData.username,
      password: reqData.password,
    };

    users.push(newUser);
    writeUsersFile(users);

    res.status(201).json({ success: 'true', message: 'User created successfully.', id: newUser.id });
  } else {
    res.status(400).json({ success: 'false', message: 'Please provide all fields.' });
  }
});

// Get users or a specific user by ID (GET)
app.get('/api/users', (req, res) => {
  const queryId = req.query.id;
  const search = req.query.search;
  const users = readUsersFile();

  if (queryId) {
    const user = users.find(user => user.id == queryId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ success: 'false', message: 'User not found with the given ID.' });
    }
  } else if (search) {
    const searchTerm = req.query.search.toLowerCase();
    const filteredUsers = users.filter(user =>
      searchPattern(user.name.toLowerCase(), searchTerm) ||
      searchPattern(user.email.toLowerCase(), searchTerm) ||
      searchPattern(user.username.toLowerCase(), searchTerm)
    );

    if (filteredUsers.length > 0) {
      res.status(200).json(filteredUsers);
    } else {
      res.status(400).json({ success: 'false', message: 'No result found' });
    }
  } else {
    res.status(200).json(users);
  }
});

// Delete a user (DELETE)
app.delete('/api/users', (req, res) => {
  const queryId = req.query.id;
  const users = readUsersFile();

  const userIndex = users.findIndex(user => user.id == queryId);
  if (userIndex !== -1) {
    const updatedUsers = users.filter(user => user.id != queryId);
    writeUsersFile(updatedUsers);
    res.status(200).json({ success: 'true', message: 'User deleted successfully.', id: queryId });
  } else {
    res.status(400).json({ success: 'false', message: 'User doesn\'t exist.', id: queryId });
  }
});

// Update a user (PATCH)
app.patch('/api/users', (req, res) => {
  const reqData = req.body;
  const users = readUsersFile();

  const userIndex = users.findIndex(user => user.id == reqData.id);
  if (userIndex !== -1) {
    const updatedUser = { ...users[userIndex], ...reqData };
    users[userIndex] = updatedUser;
    writeUsersFile(users);

    res.status(200).json({ success: 'true', message: 'User updated successfully.', ...updatedUser });
  } else {
    res.status(404).json({ success: 'false', message: 'User not found.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

