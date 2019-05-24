const jsonServer = require('json-server');
const router = jsonServer.router(require('./modules'));

const server = jsonServer.create();
const middlewares = jsonServer.defaults({ readOnly: true });

server.use(middlewares);
server.use(router);

server.listen(3035, () => {
  console.log('JSON Server is running on port 3035!');
});
