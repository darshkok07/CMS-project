const fs = require('fs');
const http = require('http');
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html');
const about = fs.readFileSync('addstudent.html');
const contact = fs.readFileSync('addcourse.html');
const services = fs.readFileSync('faculty.html');
const submit = fs.readFileSync('submit.html');
const server = createServer((req, res) => {
    console.log('req.url', req.url);
    const url = req.url;

    res.setHeader('Content-Type', 'text/html'); // Set content type here

    if (url === '/') { // Correct comparison with URL path
        res.statusCode = 200;
        res.end(home);
    } else if (url === '/addstudent.html') {
        res.statusCode = 200;
        res.end(about);
    } else if (url === '/addcourse.html.html') {
        res.statusCode = 200;
        res.end(contact);
    } else if (url === '/faculty.html') {
        res.statusCode = 200;
        res.end(services);
    } else if(url === '/submit.html') {
        res.statusCode =200;
        res.end(submit);
        res.end(home);
    }
    else {
        res.statusCode = 404;
        res.end("404 error not found");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});