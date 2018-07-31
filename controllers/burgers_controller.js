// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
      var myObject = {
        burgers: dbBurger
      };
      res.render("index", myObject);
    });
  });

  // POST route for saving a new burger
  app.post("/api/burgers", function(req, res) {
    db.Burger.create({
      burgerName: req.body.burgerName,
      devoured: req.body.devoured
    }).then(function(dbBurger) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbBurger);
    })
      .catch(function(err) {
        res.json(err);
      });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
//   app.delete("/api/todos/:id", function(req, res) {
//     // We just have to specify which todo we want to destroy with "where"
//     db.Todo.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbTodo) {
//       res.json(dbTodo);
//     });

//   });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    })
      .catch(function(err) {
        res.json(err);
      });
  });
};
