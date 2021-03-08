var http = require('http');

// you can import your module like
var dt = require('./myfirstmodule');


http.createServer(
    function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('The Date and time are currently: ' + dt.myDateTime());
        res.end('Hello World!');
    }
).listen(8080);

// to see results > run "node first.js" in terminal (at directory of file)
