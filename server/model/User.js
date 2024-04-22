const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "name is required"],
      trim: true,
      minlength: [4, "name should be longer than 4 characters"],
      maxlength: [20, "name shouldn't be longer than 20 characters"],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email address is required"],
      match: [/^\S+@\S+\.\S+$/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      trim: true,
      require: [true, "Password is required"],
      minlength: [4, "password should be longer than 4 characters"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};

userSchema.methods.createJWT = async function () {
  const token = await jwt.sign({ userId: this._id, userEmail: this.email }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return token;
};

module.exports = mongoose.model("User", userSchema);
