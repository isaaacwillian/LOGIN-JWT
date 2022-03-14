const User = require("../models/User");

const userController = {
  register: (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.email,
    });

    user
      .save()
      .then((doc) => {
        res.send(doc);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  login: (req, res) => {
    res.send("oi");
  },
};

module.exports = userController;
