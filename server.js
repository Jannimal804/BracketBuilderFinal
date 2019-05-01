const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var db = require("./models");
//var passport = require("passport");

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api-routes")(app);
// app.use(express.static(path.join(__dirname, "build")));

// app.get("*", (req, res) => {
//    res.sendFile(path.join(__dirname + "/build/index.html"));
// });

// db.sequelize.sync({ force: true}).then(function(){
   db.sequelize.sync().then(function(){
      app.listen(PORT, function(){
          console.log("listening on: " + PORT);
   });
});
