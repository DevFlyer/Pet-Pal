const fs = require("fs");
const path = require("path");
const dataPath = path.resolve(__dirname, "..", "data.json");

module.exports.getTimeline = function () {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
