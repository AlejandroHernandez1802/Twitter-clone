const express = require('express');
const app = express();
const router = express.Router();

/*Templates configuration*/
app.set("view engine", "pug");
app.set("views", "views");

/*Rendering content after server creation*/
router.get("/", (req, res, next) => {
  res.status(200);
  var payload={
    moduleName:"Register"
  }
  res.render('Register', payload);
})

module.exports = router;