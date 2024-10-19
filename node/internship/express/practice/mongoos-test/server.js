const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define a simple schema and model
const testSchema = new mongoose.Schema({
    name: String,
    value: Number,
});

const Test = mongoose.model('Test', testSchema);

// CRUD routes
// Create
app.post('/tests', async (req, res) => {
    const test = new Test(req.body);
    await test.save();
    res.status(201).send(test);
});

// Read all
app.get('/tests', async (req, res) => {
    const tests = await Test.find();
    res.send(tests);
});

// Read one
app.get('/tests/:id', async (req, res) => {
    const test = await Test.findById(req.params.id);
    if (!test) return res.status(404).send('Test not found');
    res.send(test);
});

// Update
app.put('/tests/:id', async (req, res) => {
    const test = await Test.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!test) return res.status(404).send('Test not found');
    res.send(test);
});

// Delete
app.delete('/tests/:id', async (req, res) => {
    const test = await Test.findByIdAndDelete(req.params.id);
    if (!test) return res.status(404).send('Test not found');
    res.send('Test deleted');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
