const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomerService {
  constructor() {}

  async find() {
    const customers = await models.Customer.findAll();
    return customers;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('Customer not found');
    }
    return customer;
  }

  async create(data) {
    const newCustomer = await models.Customer.create(data);
    return newCustomer;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const updated = await model.update(changes);
    return updated;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { response: true };
  }
}

module.exports = CustomerService;
