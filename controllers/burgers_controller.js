// Requiring our models
var db = require("../models");

// Routes
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

  //GET route for getting customer page
  app.get("/customers", function(req, res) {
    db.Burger.findAll({
      include: [db.Customer]
    }).then(function(joinData) {
      var myObject = {
        customers: joinData
      };
      res.render("customerManager", myObject);
    });      
  });


  // POST route for saving a new burger
  app.post("/api/burgers", function(req, res) {
    db.Burger.create({
      burgerName: req.body.burgerName,
      devoured: req.body.devoured
    }).then(function(dbBurger) {
      res.json(dbBurger);
    })
      .catch(function(err) {
        res.json(err);
      });
  });

  //POST route for creating a new customer
  app.post("/api/customers", function(req, res) {
    db.Customer.create(
      req.body
    ).then(function(dbCustomer) {
      res.json(dbCustomer);
    })
      .catch(function(err) {
        res.json(err);
      });
  });

  // DELETE route for deleting a specific burger by id
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });

  });

  // PUT route for updating burger, specifically changing the boolean 'devoured'
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
