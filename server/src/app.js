const express = require("express");
const app = express();
const fileUpload = require("express-fileUpload");
const port = 3000;

const { savePost, getTimeline } = require("./services/timeline-service.js");

app.use(fileUpload());

// Route Stuff
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/timeline", (req, res) => {
  getTimeline()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500);
      console.error(err);
    });
});

app.post("/post", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No images sent");
  }
  savePost(req).then((response) => {
    res.send(response);
  });
});

// app.post("/post/text");

// app.post(`/post/${postId}`);

// app.get("/post");

// app.post("/post/comment");

// app.get("/post/{postId}/comment");

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
