// Creating a server

// "./http" looks for a local file. Only "http" looks for a global module
const http = require("http");

// Request listener function
const rqListener = (req, res) => {
  console.log(req);
  // Quits the server if no events are registered
  //? But we do not use this, because users will not be able to reach our webpage
  // process.exit();
};

// referencing rqListener
const server = http.createServer(rqListener);

// Node JS will keep the server running to listen to incoming requests (Event Loop)
// listen() takes optional arguments. Here, we are using port number 3000.
server.listen(3000);
