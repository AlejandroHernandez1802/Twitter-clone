const express = require('express');
const app = express();
const port = 3001;

/*Server creation */
const server = app.listen(port, () => {
  console.log("Server listening on port 3001!!!")
})


/*Templates configuration*/
app.set("view engine", "pug");
app.set("views", "views");

/*Rendering content after server creation*/
app.get("/", (req, res, next) => {
  res.status(200);

  var payload = {
    moduleName:"Home"
  }

  res.render('Home', payload);
})