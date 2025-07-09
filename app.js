// Creating a server

// "./http" looks for a local file. Only "http" looks for a global module
const http = require("http");
const routes = require("./routes");

// Request listener function
// const rqListener = (req, res) => {
//   // console.log(req.url, req.method, req.headers);
//   // Quits the server if no events are registered
//   // process.exit();
//   //? But we do not use process.exit(), because users will not be able to reach our webpage
// };

// referencing rqListener
const server = http.createServer(routes);

// Node JS will keep the server running to listen to incoming requests (Event Loop)
// listen() takes optional arguments. Here, we are using port number 3000.
server.listen(3000);
