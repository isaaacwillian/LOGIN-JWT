require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/useRouter");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_CONNECTION_URL, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
});

app.use("/user", express.json(), userRouter);

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});
