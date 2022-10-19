'use strict';
const { ClassSchema, CLASS_TABLE } = require('../models/class-model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CLASS_TABLE, ClassSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CLASS_TABLE);
  }
};
