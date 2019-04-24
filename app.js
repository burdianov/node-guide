const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      "<body><form action='/message' message='post'><input type='text' name='message'/><button type='submit'>Send</button></form></body>"
    );
    res.write("</html");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");

  res.write("<html>");
  res.write("<head><title>Test page</title></head>");
  res.write("<body><h1>Test response</h1></body>");
  res.write("</html");
  res.end();
});

server.listen(3000, () => {
  console.log("server running...");
});
