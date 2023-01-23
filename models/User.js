const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: [true, "username must be unique"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "email must be unique"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
