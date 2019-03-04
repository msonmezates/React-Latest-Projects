const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const router = require('./router');
const User = require('./models/user');

const app = express();

// Mongodb Setup
mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

// Middleware Setup
app.use(morgan('combined')); // http request logger
app.use(bodyParser.json({ type: '*/*' })); // wildcard is for any request that will be parsed
router(app);

// Server Setup
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
