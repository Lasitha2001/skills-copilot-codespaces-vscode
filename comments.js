// Create web server
// Create a web server that listens for requests on port 3000 and sends the following HTML content to the client.
// <!DOCTYPE html>
// <html>
// <head>
// <title>Comments</title>
// </head>
// <body>
// <h1>Comments</h1>
// <ul>
// <li>Comment 1</li>
// <li>Comment 2</li>
// <li>Comment 3</li>
// </ul>
// </body>
// </html>
// The server should send the content as a response to any request it receives. You can test the server by visiting http://localhost:3000 in your browser.

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
    <title>Comments</title>
    </head>
    <body>
    <h1>Comments</h1>
    <ul>
    <li>Comment 1</li>
    <li>Comment 2</li>
    <li>Comment 3</li>
    </ul>
    </body>
    </html>
  `);
});

server.listen(3000);
console.log('Server listening on port 3000');