import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

async function readAndSendPage(filepath) {
  try {
    let file = await readFile(filepath);
    return file;
  } catch (error) {
    console.log(error);
  }
}

const server = createServer(async (req, res) => {
  switch (req.url) {
    case "/":
      res.end(await readAndSendPage("./index.html"));
      break;
    case "/about":
      res.end(await readAndSendPage("./about.html"));
      break;
    case "/contact-me":
      res.end(await readAndSendPage("./contact-me.html"));
      break;
    case "/style.css":
      res.end(await readAndSendPage("./style.css"));
      break;
    default:
      res.end(await readAndSendPage("./404.html"));
      break;
  }
});

server.listen(8080, () => {
  console.log("Serving HTTP on 0.0.0.0 port 8080 (http://0.0.0.0:8080/)");
});
