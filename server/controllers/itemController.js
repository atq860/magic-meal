const { Account } = require("../models/account");
const { Restaurant } = require("../models/restaurant");
const { Items } = require("../models/item");
const { validateItem } = require("../middleware/validation");

exports.addItem = async (req, res) => {
  const { error } = validateItem(req.body);

  if (error) return res.status(400).send("Enter data  correctly.");

  const { name, price, category, description } = req.body;

  let restaurant = Restaurant.findById({
    _id: req.loggedInUserId,
  });

  try {
    if (!restaurant)
      return res.status(404).send("No restaurant exists with this id.");

    let newItem = new Items({
      name: name,
      price: price,
      category: category,
      description: description,
      restaurant: restaurant._id,
    });

    restaurant.Items.push(newItem);
    await newItem.save();
  } catch (error) {
    if (error)
      return res.status(500).json({
        message: "There was a problem while saving your data.",
        error: error,
      });
  }
};

exports.deleteItem = (req, res) => {
  const itemId = req.itemId;

  const restaurant = Restaurant.findOne({});
};
