const express = require('express');
const { parse } = require('url');
const { join } = require('path');

// const { jsonSerializeObj } = require('./utils/serializeUtils');
const apiRouter = require('./routes/api');

const port = parseInt(process.env.PORT, 10) || 8080;
const server = express();

(async () => {
	/* Static resources */
	server.use(express.static('static'));

	/*  Express Routing: APIs */
	server.use('/api', apiRouter);

	/* Server starts here */
	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
})();
