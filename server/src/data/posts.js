const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const PostSchema = new Schema({
  id: String,
  imageUrl: String,
  text: String,
  status: Number,
});

module.exports = mongoose.model("Post", PostSchema);
