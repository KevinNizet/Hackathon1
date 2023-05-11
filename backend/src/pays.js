const database = require("./database");

const getPays = (req, res) => {
  database
    .query("SELECT * FROM pays")
    .then(([pays]) => {
      if (pays[0] != null) {
        res.json(pays);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = { getPays };
