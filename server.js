const http = require('http');
const Koa = require('koa');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const router = require('./routes');

const app = new Koa();
const port = process.env.PORT || 7575;
const server = http.createServer(app.callback());

app.use(koaBody({
    urlencoded: true,
    multipart: true,
  }));
app.use(cors());
app.use(router());
server.listen(port);
console.log(`server start at http://localhost:${port}`)