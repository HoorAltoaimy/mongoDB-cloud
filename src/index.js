const express = require("express");
const mongoose = require("mongoose");
const productsRouter = require("./routes/productsRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3005;
const mongoURL = process.env.MONGODB_URL || "";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("welcome to the express server");
});

app.listen(PORT, () => {
  console.log(`API listining on PORT ${PORT}`);
  connectDB();
});
