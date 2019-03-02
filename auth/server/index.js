const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// Middleware Setup
app.use(morgan('combined')); // http request logger
app.use(bodyParser.json({ type: '*/*' })); // wildcard is for any request that will be parsed

// Server Setup
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
