const http = require("http");
const fs = require('fs')
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    // console.log(req.url)
    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>Hello World</h1> <p>Hi everyone</p>');
    }
    else if (req.url == 'about') {
        res.statusCode = 200;
        res.end('<h1>Hello About page</h1> <p>wihfiufe</p>');
    }
    else if (req.url == '/page') {
        res.statusCode = 200;
        const data = fs.readFileSync('page.html')
        res.end(data.toString());
    }
    else {
        res.statusCode = 404;
        res.end('<h1>Page Not Found</h1> <p>wihfiufe</p>');

    }
})

server.listen(port, () => {
    console.log(`server is listen on port ${port}`);
})