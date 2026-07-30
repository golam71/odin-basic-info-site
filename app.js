import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const routes = {
  "/": "index.html",
  "/about": "about.html",
  "/contact-me": "contact-me.html",
  "/style.css": "style.css",
};

async function sendFile(response, fileName) {
  try {
    response.end(await readFile(fileName));
  } catch (err) {
    console.log(err);
    response.end("Internal server error");
  }
}

const server = createServer((req, res) => {
  sendFile(res, routes[req.url] ?? "404.html");
});

server.listen(8080, () => {
  console.log("Serving HTTP on 0.0.0.0 port 8080 (http://0.0.0.0:8080/)");
});
