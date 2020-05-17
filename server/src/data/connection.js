const mongoose = require("mongoose");

module.exports = function Connection() {
  mongoose.connect("mongodb://localhost:27017/Pet-Pal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
