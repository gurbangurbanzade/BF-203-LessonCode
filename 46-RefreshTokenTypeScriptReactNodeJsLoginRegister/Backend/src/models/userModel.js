const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: String,
    userName: String,
  },
  { collection: "Users", timestamps: false }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
