const http = require('http');

const server = http.createServer((req, res) => {
  const { headers, method, url } = req;
  console.log(headers, method, url);
  res.end('Hello World');
});

const PORT = 8000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

