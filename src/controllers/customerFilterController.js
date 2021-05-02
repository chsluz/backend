const { filterCustomer } = require('../service/customerService');

module.exports = {
  filter: async (req, res) => {
    const { text } = req.query;
    let customers = await filterCustomer(text);
    res.json(customers);
  },
};