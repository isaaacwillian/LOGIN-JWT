const express = require("express");
const router = express.Router();

const auth = require("../controllers/authController");

router.get("/", auth, (req, res) => {
  if (req.user.admin) return res.send("Dado restrito para admin");

  res.status(401).send("Access Denied, not admin");
});

router.get("/free", auth, (req, res) => {
  res.send("Se tiver logado pode ver");
});

module.exports = router;
