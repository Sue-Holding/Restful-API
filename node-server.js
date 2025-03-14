import { createServer } from "node:http";
import url from 'node:url';

const hostname = '127.0.0.1';
const port = 3000;

function handler(req, res) {
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World!');
    } else if (parsedUrl.pathname === '/time') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(new Date().toString());
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
    }
}

const server = createServer(handler);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});