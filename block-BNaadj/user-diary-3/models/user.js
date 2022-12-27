var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number },
  address: { type: String },
  bio: { type: String },
  hobbies: [String],
});

var User = mongoose.model('User', userSchema);

module.exports = User;
