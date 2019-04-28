import axios from "axios";

//var db = require("../../../models");

export default {
    getFromGeo: function(search){
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=AIzaSyDZYOxZZL8kgIlC4RLfG8Gkfr8xHnZmFTc`)
    },

    signUp: function(userData) {
        console.log("sending request!");
        return axios.post('/api/signup', userData)
    },

     // Gets all books
    getCompetitors: function() {
        console.log("requesting users!")
    return axios.get("/api/user_data");
  },
  // Gets the book with the given id
  //instead of ID weight & belt and tacked onto URL
//   getCompetitor: function(beltLevel) {
//     return axios.get("/api/competitors/" + beltLevel);
//   },

  // Saves a book to the database
//   followCompetitor: function(followCompetitor) {
//     return axios.post("/api/competitors", followCompetitor);
//   },

// allCompetitors: function(allCompetitors) {
//     return axios.get("/api/competitors")
//     console.log(req.body);
//     db.reactbb.findAll({}).then(function(reactbb) {
//       res.json(reactbb);
//  },


//   // Create a new competitors
// //   app.post("/api/competitors", function(req, res) {
// //     // run a query to get users that match our user's belt + weight
// //     const userData = req.body;

// //     db.Competitors.findAll({
// //       where: { belt_color: userData.belt_color, weight: userData.weight}
// //     }).then((matchesRes) => {
// //       db.Competitors.create(req.body).then(() => {
// //         res.json(matchesRes); 
// //       });      
// //     });
// //   });


//   matchCompetitors: function(matchCompetitors) {
//     db.User.findOne({
//         where: {
//           email: email
//         }
//   return axios.get("/api/competitors/:beltType/:weightClass", matchCompetitors);
//     }
}