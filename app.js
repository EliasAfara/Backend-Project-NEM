// Import Statements
const express = require('express');
const mongoose = require('mongoose');

const productsRouter = require('./routes/product-routes');

// Middlewares
const app = express();
app.use(express.json());
// Routes
app.use('/products', productsRouter);

// app.get('/', (req, res) => {
//   res.send('Hello Elias');
// });

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
