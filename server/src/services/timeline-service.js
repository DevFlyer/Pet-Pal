const Connection = require("../data/connection");
const Post = require("../data/posts");
Connection();

const getTimeline = async function () {
  return Post.find({}, function (err, posts) {
    if (err) throw err;
    return posts;
  });
};

const getNextId = async () => {
  let timeline = await getTimeline();
  return timeline.length + 1;
};

const savePost = async (post) => {
  const newPost = Post(post);
  newPost.save(function (err) {
    if (err) throw err;
    console.log("Post created!");
    return true;
  });
};

module.exports = {
  getTimeline,
  getNextId,
  savePost,
};
