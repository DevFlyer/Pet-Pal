const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const PostSchema = new Schema({
  imageUrl: String,
  text: String,
  status: Number,
});

module.exports = mongoose.model("Post", PostSchema);
