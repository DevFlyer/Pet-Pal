/**
 * @typedef {Object} Post
 * @property {Number} id - Post Id
 * @property {String} imageUrl - 
 * @property {String} text -
 * @property {Number} status -
 * 
 * const Status = [
  draft: 0,
  public: 1,
  private: 2,
  deleted: 3,
  archived: 4,
];
 */

module.exports = function () {
  return {
    id: 0,
    imageUrl: "",
    text: "",
    status: 0,
  };
  //   this.id = 0;
  //   this.imageUrl = "";
  //   this.text = "";
  //   this.status = 0;
};
