// Example model

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  url: String,
  text: String
});

ArticleSchema.virtual('date')
  .get(() => this._id.getTimestamp());

export const Article = mongoose.model('Article', ArticleSchema);
