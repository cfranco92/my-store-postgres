'use strict';

const { UserChema, USER_TABLE } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserChema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
  },
};
