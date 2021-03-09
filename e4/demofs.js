var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    
    // __dirname lets you have directory of current working js file...
    fs.readFile(__dirname + '/demo.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

}).listen(8080);