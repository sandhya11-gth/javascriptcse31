const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.method === 'GET' && req.url === '/students') {
        res.statusCode = 200;
        return res.end('GET : Student list');
    } 
    if (req.method === 'POST' && req.url === '/students') {
        res.statusCode = 201;
        return res.end('POST : Student list');
    } 
    if (req.method === 'PUT' && req.url === '/students/101') {
        res.statusCode = 200;
        return res.end('PUT : Student updated');
    } 
    if (req.method === 'DELETE' && req.url === '/students/101') {
        res.statusCode = 200;
        return res.end('DELETE : Student delete');
    } 

    res.statusCode = 404;
    return res.end('route not found');
});

server.listen(3000, () => console.log('Server on 3000'));