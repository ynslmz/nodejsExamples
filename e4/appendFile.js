var http = require('http');
var fs = require('fs');

// debug and see differences

http.createServer((req, res) => {
    // The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created!
    // If you didn't locate your file's directory it'll create it in root of your app directory!

    // this appends text to end of file
    fs.appendFile(__dirname + '/fsAppendtoJson.json', '{"hello":"world"}', (err) => {
        if (err) throw err;
        console.log('Saved!');
    });

    // this method replaces the specified file and content 
    fs.writeFile(__dirname + '/fsAppendtoJson.json', '{"hello":"world"}', (err) => {
        if (err) throw err;
        console.log('saved!');
    });
    res.end('saved!');
}).listen(8080);