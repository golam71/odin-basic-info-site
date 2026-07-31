import express from "express";

const app = new express();

const send = (filename) => {
  return (req, res) => {
    res.sendFile(import.meta.dirname + "/" + filename);
  };
};

app.get("/", send("./index.html"));
app.get("/about", send("./about.html"));
app.get("/contact-me", send("./contact-me.html"));

app.use(express.static(import.meta.dirname + "/public/"));

app.use(send("./404.html"));

app.listen(8080, (err) => {
  if (err) console.log(err);
  else console.log("Serving HTTP on 0.0.0.0 port 8080 (http://0.0.0.0:8080/)");
});
