'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = process.env.HTTP_PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to Dheeraj Digital Ready');
})

app.listen(port, () => {
    console.log(`Server Web APi is running on port : ${port} mode`);
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

module.exports = app;