const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

//Middlewares import
const loginMiddelware = require('./middlewares/loginMiddleware')

/*Server creation */
const server = app.listen(port, () => {
  console.log("Server listening on port 3001!!!")
})

/*Templates configuration*/
app.set("view engine", "pug");
app.set("views", "views");

/*Setting index for static files*/
app.use(express.static(path.join(__dirname , "public")));

/*Routes declaration*/
const loginRoute = require('./routes/loginRoute');
app.use("/login", loginRoute);
const registerRoute = require('./routes/registerRoute');
app.use("/register", registerRoute);


/*Rendering content after server creation*/
app.get("/", loginMiddelware.loginMiddleware, (req, res, next) => {
  res.status(200);
  var payload = {
    moduleName:"Home"
  }
  res.render('Home', payload);
})