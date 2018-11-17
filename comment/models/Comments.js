var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
  User: String,
  Password: String,
  title: String,
  upvotes: String
});
mongoose.model('Comment', CommentSchema);