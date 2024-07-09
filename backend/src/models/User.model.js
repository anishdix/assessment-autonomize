const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  location: String,
  blog: String,
  bio: String,
  public_repos: Number,
  public_gists: Number,
  followers: Number,
  following: Number,
  created_at: Date,
  updated_at: Date,
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
