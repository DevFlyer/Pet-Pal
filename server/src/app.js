const express = require("express");
const app = express();
const fileUpload = require("express-fileUpload");
const port = 3000;

const Post = require("./models/post");
const {
  savePost,
  getNextId,
  getTimeline,
} = require("./services/timeline-service.js");

app.use(fileUpload());

// Route Stuff
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/timeline", (req, res) => {
  getTimeline()
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => {
      res.status(500);
      console.error(err);
    });
});

app.post("/post/image", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let sampleFile = req.files.sampleFile;

  sampleFile.mv(`upload/images/${sampleFile.name}`, async (err) => {
    if (err) {
      return res.status(500).send(err); // Probably only if in debug mode
    }

    const post = Post();
    post.id = await getNextId().catch((err) => {
      res.status(500).send("getNextId broke");
      console.error(err);
    });
    post.imageUrl = `upload/images/${sampleFile.name}`;
    savePost(post).then((result) => {
      res.send({ result, post: post.id });
    });
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
