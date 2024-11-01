import http from "http";
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = http.createServer((req, res) => {
  let fileName = "./404.html";
  switch (req.url) {
    case "/":
      fileName = "./index.html";
      break;
    case "/index":
      fileName = "./index.html";
      break;
    case "/about":
      fileName = "./about.html";
      break;
    case "/contact-me":
      fileName = "./contact-me.html";
      break;
    case "/favicon.ico":
      res.writeHead(200, { "Content-Type": "image/png" });
      fs.readFile(join(__dirname, "pear.png"), null, (err, data) => {
        if (err) throw err;
        res.end(data);
      });
      return;
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile(join(__dirname, fileName), "utf-8", (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(8080);
