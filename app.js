// Creating a server

// "./http" looks for a local file. Only "http" looks for a global module
const http = require("http");

// Request listener function
const rqListener = (req, res) => {
  console.log(req.url, req.method, req.headers);
  // Quits the server if no events are registered
  // process.exit();
  //? But we do not use this, because users will not be able to reach our webpage

  //Sending a response
  res.setHeader("Content-Type", "text/html");
  // noob way of sending html content
  res.write(
    "<html><head><title>My First Page</title></head><body>Hello from my first Node.js Server!</body></html>"
  );
  // After res.end(), we should not write anything or it will give an error
  res.end();
};

// referencing rqListener
const server = http.createServer(rqListener);

// Node JS will keep the server running to listen to incoming requests (Event Loop)
// listen() takes optional arguments. Here, we are using port number 3000.
server.listen(3000);
