const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["customer", "restaurant"],
    required: true,
  },
  accountVerifyToken: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const Account = mongoose.model("Account", accountSchema);

exports.Account = Account;
