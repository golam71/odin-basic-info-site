const http = require("node:http");
const fs = require("node:fs");

let file;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.end(data);
        }
      });
      break;
    case "/about":
      fs.readFile("./about.html", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.end(data);
        }
      });
      break;
    case "/contact-me":
      fs.readFile("./contact-me.html", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.end(data);
        }
      });
      break;
    case "/style.css":
      fs.readFile("./style.css", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.end(data);
        }
      });
      break;
    default:
      fs.readFile("./404.html", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.end(data);
        }
      });
  }
});

server.listen(3000, () => {
  console.log("Serving HTTP on 0.0.0.0 port 3000 (http://0.0.0.0:3000/)");
});
