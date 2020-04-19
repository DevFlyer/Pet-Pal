const fs = require("fs");
const path = require("path");

const dataPath = path.resolve(__dirname, "..", "data.json");

const getTimeline = function () {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const getNextId = async () => {
  let timeline = await getTimeline();
  timeline = JSON.parse(timeline);
  return timeline.length + 1;
};

const savePost = async (post) => {
  let timeline = await getTimeline();
  timeline = JSON.parse(timeline);
  timeline.push(post);
  timeline = JSON.stringify(timeline);
  fs.writeFileSync(dataPath, timeline);
  return timeline;
};

module.exports = {
  getTimeline,
  getNextId,
  savePost,
};
