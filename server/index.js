const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const auth = require("./routes/auth");

mongoose
  .connect(
    "mongodb+srv://Nofel:pakistan123@cluster0.mj1ib.mongodb.net/MagicMeal?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to mongo"))
  .catch((e) => console.log("Catched Error", e));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", auth);

const port = 3001;
app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
