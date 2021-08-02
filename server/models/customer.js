const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
  },
});

const Customer = mongoose.model("Customer", customerSchema);
exports.Customer = Customer;
