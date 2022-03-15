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

  login: async (req, res) => {
    const selectedUser = await User.findOne({ email: req.body.email });
    if (!selectedUser) {
      return res.status(400).send("Email or password is incorrect");
    }

    const passwordAndUserMatch = bcrypt.compareSync(
      req.body.password,
      selectedUser.password
    );
    if (!passwordAndUserMatch) {
      return res.status(400).send("Email or password is incorrect");
    }

    res.send("User Logged");
  },
};

module.exports = userController;
