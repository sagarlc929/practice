const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 5000;
app.use(express.json());

// Use user routes.
app.use('/api', userRoutes);

app.listen(port, ()=>{
  console.log(`Server listening on ${port}`);
});
