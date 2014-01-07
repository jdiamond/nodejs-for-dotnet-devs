var http = require('http');

var server = http.createServer(function (req, res) {
    console.log(req.url);
    debugger;

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write('<p>Hello, http!</p>');
    res.end();
});

server.listen(8080);
