const express = require("express");

const {
  insertCustomer,
  listCustomer,
  filterCustomer,
  updateCustomer,
  deleteCustomer,
} = require("./service/customerService");
const routes = express.Router();

routes.get("/customers", async (req, res) => {
  let customers = await listCustomer();
  res.json(customers);
});

routes.get("/customers/:id", async (req, res) => {
    let {id} = req.params;
    let customers = await listCustomer(id);
    res.json(customers);
  });

routes.post("/customers", async (req, res) => {
  const { name, email, phone, address } = req.body;
  let costumers = await insertCustomer({ name, email, phone, address });
  res.json(costumers);
});

routes.put("/customers/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address } = req.body;
  await updateCustomer(id,{name,email,phone,address});

  res.json({_id: id,name,email,phone,address});
});

routes.delete("/customers/:id", async (req, res) => {
    const { id } = req.params;
    const teste = await deleteCustomer(id);
    res.json(teste);
  });


routes.get("/customers-filter", async (req, res) => {
  const { text } = req.query;
  let customers = await filterCustomer(text);
  res.json(customers);
});

module.exports = routes;
