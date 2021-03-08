var http = require('http');
http.createServer(
    (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        console.log(req.url)
        var myURL = new URL(req.url, 'http://localhost:8080');
        var year = myURL.searchParams.get('year');
        var month = myURL.searchParams.get('month');

        res.end(year + ' ' + month);
    }
).listen(8080);