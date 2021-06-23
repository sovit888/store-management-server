const mongoose = require("mongoose");
const crypto = require("crypto");
const uuid = require("uuid").v4;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    salt: {
      type: String,
      required: true,
      trim: true,
    },
    enc_password: {
      type: String,
      required: true,
      trim: true,
    },
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    group: { type: mongoose.Types.ObjectId, ref: "group", required: true },
  },

  { timestamps: true }
);

userSchema.virtual("password").set(function (password) {
  this.salt = uuid();
  this.enc_password = this.securePassword(password);
});

userSchema.method({
  securePassword: function (plainpassword) {
    return crypto
      .createHmac("sha256", this.salt)
      .update(plainpassword)
      .digest("hex");
  },
  authenticate: function (plainpassword) {
    return this.enc_password === this.securePassword(plainpassword);
  },
  changePassword: function (password) {
    this.enc_password = this.securePassword(password);
    this.save();
  },
});

module.exports = mongoose.model("user", userSchema);
