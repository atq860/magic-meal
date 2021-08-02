const mongoose = require("mongoose");

//R
const restaurantSchema = mongoose.Schema({
  ownerName: {
    type: String,
    required: true,
  },
  restaurantName: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  items: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Items" },
  ],
  account: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Account",
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

exports.Restaurant = Restaurant;
