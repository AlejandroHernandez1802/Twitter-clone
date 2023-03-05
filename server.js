const http = require('http');
const routesHandler = require('./routes');

const myServer = http.createServer(routesHandler);

myServer.listen('3001');