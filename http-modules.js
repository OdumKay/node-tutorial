const http = require('http');

const server = http.createServer((req, res) => {
   if (req.url === '/'){
   
    res.end('welcome to our home page');
    
   }

   if (req.url === '/about'){
    res.end ('here is our products')
    
   }
  
  res.end(`
  <h1>oops!<h1>
  <p>No result found on the server<p>
  <a href="/">Back to home page<a>`);
  
})

server.listen(5000)