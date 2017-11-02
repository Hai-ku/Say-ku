var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/haiku", function(req, res) {
    var query = {};
    if (req.query.users_id) {
      query.usersId = req.query.users_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.haiku.findAll({
      where: query,
      include: [db.users]
    }).then(function(dbHaiku) {
      res.json(dbHaiku);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/haiku/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.haiku.findOne({
      where: {
        id: req.params.id
      },
      include: [db.users]
    }).then(function(dbHaiku) {
      res.json(dbHaiku);
    });
  });

  // POST route for saving a new post
  app.haiku("/api/haiku", function(req, res) {
    db.haiku.create(req.body).then(function(dbHaiku) {
      res.json(dbHaiku);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/haiku/:id", function(req, res) {
    db.haiku.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbHaiku) {
      res.json(dbHaiku);
    });
  });

  // PUT route for updating posts
  app.put("/api/haiku", function(req, res) {
    db.haiku.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbHaiku) {
        res.json(dbHaiku);
      });
  });
};
