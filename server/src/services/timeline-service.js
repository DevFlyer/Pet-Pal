const Connection = require("../data/connection");
Connection();
const Post = require("../models/post");

const getTimeline = async function () {
  return Post.find({}, function (err, posts) {
    if (err) throw err;
    return posts;
  });
};

const processPost = (req) => {
  const sampleFile = req.files.sampleFile;
  const post = Post();

  post.text = req.body.text;
  post.status = req.body.status;
  post.imageUrl = sampleFile.mv(`upload/images/${sampleFile.name}`, (err) => {
    if (err) {
      res.status(500);
      return err; // Probably only if in debug mode
    }

    return `upload/images/${sampleFile.name}`;
  });
  return post;
};

const savePost = async (req) => {
  const newPost = await processPost(req);
  console.log({ newPost });
  newPost.save(function (err) {
    if (err) throw err;
    console.log("Post created!");
    return "Post created!";
  });
};

module.exports = {
  getTimeline,
  savePost,
  processPost,
};
