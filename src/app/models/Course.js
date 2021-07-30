const mongoose = require("mongoose");
var slug = require("mongoose-slug-generator");
var mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;
const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    videoID: { type: String, require: true },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);
//add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });
module.exports = mongoose.model("Course", Course);
