const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const dbRouter = require('./routes/dbRouter.js');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb+srv://danieldkim42:JCk4CgEjeOAoDcHD@cluster0.gp5z5ak.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/db', dbRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('500 Internal Server Error');
});

app.listen(PORT, () => {
  console.log("Listening on PORT: ", PORT);
});

module.exports = app;