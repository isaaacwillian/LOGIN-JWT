const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true, min: 3, max: 50 },
  email: { type: String, required: true, min: 7, max: 100, unique: true },
  password: { type: String, required: true, min: 6, max: 200 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
