const database = require("./database");

const getPays = (req, res) => {
  const id = parseInt(req.params.id, 10);
  database
    .query("select * from pays where id = ?", [id])
    .then(([pays]) => {
      if (pays[0] != null) {
        res.json(pays[0]);
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
