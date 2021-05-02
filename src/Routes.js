const express = require("express");

const customerController = require('./controllers/customerController');
const customerFilterController = require('./controllers/customerFilterController');
const routes = express.Router();

routes.get("/", async (req, res) => {
  res.json({message: 'Status OK'});
});

routes.get("/customers", customerController.list);
routes.get("/customers/:id", customerController.findById);
routes.post("/customers", customerController.insert);
routes.put("/customers/:id", customerController.edit);
routes.delete("/customers/:id", customerController.delete);
routes.get("/customers-filter", customerFilterController.filter);

module.exports = routes;
