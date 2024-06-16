const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/connecting-paws')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/', require('./routes/auth'));
app.use('/', require('./routes/adoptRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
