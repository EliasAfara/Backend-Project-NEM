// Import Statements
const express = require('express');
const mongoose = require('mongoose');

// Middlewares
const app = express();

// Routes

app.get('/', (req, res) => {
  res.send('Hello Elias');
});

// Connections and PORT
mongoose
  .connect(
    'mongodb+srv://admin-elias:sFmwcOd0vFA5b0Re@cluster0.hbsnj.mongodb.net/shop?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8000);

// sFmwcOd0vFA5b0Re
