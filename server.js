var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
var port = process.env.PORT || 3200;

server.use(middlewares);
server.use(router);

server.listen(port);