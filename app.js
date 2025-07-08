// Creating a server

// "./http" looks for a local file. Only "http" looks for a global module
const http = require("http");
const fs = require("fs");

// Request listener function
const rqListener = (req, res) => {
  // console.log(req.url, req.method, req.headers);
  // Quits the server if no events are registered
  // process.exit();
  //? But we do not use this, because users will not be able to reach our webpage

  const url = req.url;
  const method = req.method;
  if (url === "/") {
    // noob way of sending html content
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write("<body>");
    res.write("<form action='/message' method='POST'>");
    res.write(
      "<input type='text' name='message'/><button type='submit'>Send</button>"
    );
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    // After res.end(), we should not write anything or it will give an error
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY");
    res.statusCode = "302";
    res.setHeader("Location", "/");
    return res.end();

    //Sending a response
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body>Hello from my first Node.js Server!</body>");
    res.write("</html>");
    return res.end();
  }
};

// referencing rqListener
const server = http.createServer(rqListener);

// Node JS will keep the server running to listen to incoming requests (Event Loop)
// listen() takes optional arguments. Here, we are using port number 3000.
server.listen(3000);
