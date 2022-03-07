const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/v1', require('./api/v1'))

module.exports = app;