const { listCustomer, insertCustomer, updateCustomer, deleteCustomer } = require('../service/customerService');

module.exports = {
  list: async (req, res) => {
    let customers = await listCustomer();
    res.json(customers);
  },
  insert: async (req, res) => {
    const { name, email, phone, address } = req.body;
    let costumers = await insertCustomer({ name, email, phone, address });
    res.json(costumers);
  },
  findById: async (req, res) => {
    let {id} = req.params;
    let customers = await listCustomer(id);
    res.json(customers);
  },
  edit: async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, address } = req.body;
    await updateCustomer(id,{name,email,phone,address});
  
    res.json({_id: id,name,email,phone,address});
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const teste = await deleteCustomer(id);
    res.json(teste);
  }
};