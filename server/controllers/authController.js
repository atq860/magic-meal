const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const { Customer } = require("../models/customer");
const { Account } = require("../models/account");
const { Restaurant } = require("../models/restaurant");
const {
  validateUser,
  validateRestaurant,
} = require("../middleware/validation");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "biaraza786@gmail.com ",
    pass: "Ilovepak786",
  },
});

exports.login = async (req, res) => {
  const { error } = validateLogin(req.body);

  if (error) return res.status(400).send("Enter data in correct form.");

  const { email, password } = req.body;

  let loadedAccount = await Account.findOne({
    email: email,
  });

  try {
    if (!loadedAccount)
      return res.status(404).send("Invalid Email or password");
    let hashedPassword = bcrypt.password.compare(
      password,
      loadedAccount.password
    );

    if (!hashedPassword)
      return res.status(404).send("Invalid Email or password");
    const token = jwt.sign(
      { accountId: loadedAccount._id.toString() },
      "myKey"
    );
    return res.status(200).json({
      message: "Log In Successfull",
      token: token,
    });
  } catch (error) {
    if (error)
      return res.status(400).json({
        message: "Something went wrong while returning the response",
        error: error,
      });
  }
};

exports.signupRestaurant = async (req, res) => {
  const { error } = validateRestaurant(req.body);

  if (error) return res.status(400).send("Enter data correctly");

  const {
    ownerName,
    restaurantName,
    contact,
    category,
    address,
    email,
    password,
    role,
  } = req.body;

  const user = await Restaurant.findOne({ email: email });

  if (user) {
    return res.status(404).send("User already exists.");
  }

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  const verificationToken = crypto.randomBytes(32).toString("hex");

  let newAccount = new Account({
    email: email,
    password: hashedPassword,
    role: role,
    accountVerifyToken: verificationToken,
  });

  saveNewAccount = await newAccount
    .save()
    .then((savedAccount) => {
      console.log("Account has been registered", savedAccount);
    })
    .catch((err) => {
      console.log("Account not saved", err);
    });

  let newRestaurant = new Restaurant({
    ownerName: ownerName,
    restaurantName: restaurantName,
    contact: contact,
    category: category,
    address: address,
    //account: saveNewAccount._id,
  });

  newRestaurant = await newRestaurant
    .save()
    .then((savedRestaurant) => {
      res.status(200).json({
        message: "Saved Restaurant",
      });
    })
    .catch((err) => {
      console.log("Customer could not be saved.", err);
      return res.status(500).json({
        message: "Could not save Restaurant.",
      });
    });
};

exports.signupCustomer = async (req, res) => {
  const { error } = validateUser(req.body);

  if (error) return res.status(400).send("Enter data correctly");

  const { firstName, lastName, contact, email, password, role } = req.body;

  const user = await Customer.findOne({ email: email });

  if (user) {
    return res.status(404).send("User already exists.");
  }

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  const verificationToken = crypto.randomBytes(32).toString("hex");

  let newAccount = new Account({
    email: email,
    password: hashedPassword,
    role: role,
    accountVerifyToken: verificationToken,
  });

  saveNewAccount = await newAccount
    .save()
    .then((savedAccount) => {
      console.log("Account has been registered", savedAccount);
    })
    .catch((err) => {
      console.log("Account not saved", err);
    });

  let newCustomer = new Customer({
    firstName: firstName,
    lastName: lastName,
    contact: contact,
    //account: saveNewAccount._id,
  });

  newCustomer = await newCustomer
    .save()
    .then((savedCustomer) => {
      res.status(200).json({
        message: "Saved Customer",
      });
    })
    .catch((err) => {
      console.log("Customer could not be saved.", err);
      return res.status(500).json({
        message: "Could not save customer.",
      });
    });
};
