var http = require('http');

http.createServer(
    function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Hello World!');
    }
).listen(8080);

// to see results > run "node first.js" in terminal (at directory of file)
