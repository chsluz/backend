const Customer = require('../model/Customer');


module.exports = {
    insertCustomer: async function(customer){
        const {email} = customer;
        let newCostumer = await Customer.findOne({email});
        if(!newCostumer) {
            newCostumer = await Customer.create({...customer});
        }
        return newCostumer;
    },
    updateCustomer: async function(_id,customer) {
         return Customer.updateOne({_id: _id}, {...customer});
    },
    deleteCustomer: async function(_id) {
        return Customer.deleteOne({_id: _id});
    },
    listCustomer: async function(_id = undefined) {
        if(_id) {
            return Customer.findOne({_id});
        }
        return Customer.find();
    },
    filterCustomer: async function(text){
        return Customer.find({$or: [{name: {$regex: text }},{email: {$regex: text }}, {phone: {$regex: text }}, {address: {$regex: text }}]})
    }
}