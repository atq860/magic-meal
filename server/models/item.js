const mongoose = require("mongoose");

const itemsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Restaurant",
  },
});

const Items = mongoose.model("Items", itemsSchema);

exports.Items = Items;
