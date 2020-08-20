const express = require('express')
const nunjucks = require('nunjucks');
const routes = require('./routes');
const PORT = process.env.PORT || 5000;

const server = express();

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'));
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});

process.env.TZ = 'America/Fortaleza';
console.log(new Date().getTimezoneOffset())

server.listen(PORT, function () {
  console.log("O servidor está online.")
});
