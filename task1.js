const http = require('http');
const shell = require('shelljs')
let a = 0
const requestListener = function (req, res) {
  res.writeHead(200);
  
  Math.random() > 0.5 ? (shell.exec('pm2 delete ecosystem.config.js --only "task2"'), console.log('停止了')) : shell.exec('pm2 restart ecosystem.config.js --only "task2"');
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);