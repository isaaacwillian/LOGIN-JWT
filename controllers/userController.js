const User = require("../models/User");
const bcrypt = require("bcryptjs");

const userController = {
  register: (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });

    user
      .save()
      .then((doc) => {
        res.send(doc);
      })
      .catch((err) => {
        res.status(400).send("Email already exists");
      });
  },

  login: (req, res) => {
    res.send("oi");
  },
};

module.exports = userController;
