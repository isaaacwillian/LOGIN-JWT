require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/useRouter");
const mongoose = require("mongoose");
const adminRouter = require("./routes/adminRouter");

mongoose.connect(process.env.MONGO_CONNECTION_URL, (err) => {
  if (err) return console.log(err);

  console.log("Connected to database");
});

app.use("/user", express.json(), userRouter);

app.use("/admin", adminRouter);

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});
