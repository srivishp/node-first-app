const fs = require("fs");

const requestHandler = (req, res) => {
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
    // Parsing the request body (Streams & Buffers)
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });

    //Sending a response
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body>Hello from my first Node.js Server!</body>");
    res.write("</html>");
    return res.end();
  }
};

module.exports = requestHandler;
