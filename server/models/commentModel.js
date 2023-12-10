// Import any required modules or dependencies here
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define the Comment model schema
const commentSchema = new Schema({
  // Define the properties of the Comment model here
  text: {type: String, required: true},
  keywords: {type: Object, default: {}}
});

// Create the Comment model using the schema
const Comment = mongoose.model('Comment', commentSchema);

// Export the Comment model
module.exports = Comment;
