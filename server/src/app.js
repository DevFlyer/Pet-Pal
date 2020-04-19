const express = require("express");
const app = express();
const fileUpload = require("express-fileUpload");
const TimelineService = require("./services/timeline-service.js");
const port = 3000;

let Post = require("./models/post");
Post = Post.Post;
const { savePost, getNextId } = require("./services/timeline-service.js");
// const  = require("./services/timeline-service.js");

app.use(fileUpload());

// Route Stuff
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/timeline", (req, res) => {
  TimelineService.getTimeline()
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => console.error(err));
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
    post.id = await getNextId();
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
