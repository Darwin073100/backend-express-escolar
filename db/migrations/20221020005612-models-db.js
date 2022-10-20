'use strict';
const { ClassModel, CLASS_TABLE } = require('../models/class-model');
const { CareerModel, CAREER_TABLE } = require('../models/career-model');
const { UserModel, USER_TABLE } = require('../models/user-model');
const { StudentModel, STUDENT_TABLE } = require('../models/student-model');
const { ClassStudentModel, CLASS_STUDENT_TABLE } = require('../models/class-student-model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CLASS_TABLE, ClassModel);
    await queryInterface.createTable(CAREER_TABLE, CareerModel);
    await queryInterface.createTable(USER_TABLE, UserModel);
    await queryInterface.createTable(STUDENT_TABLE, StudentModel);
    await queryInterface.createTable(CLASS_STUDENT_TABLE, ClassStudentModel);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CLASS_TABLE);
    await queryInterface.dropTable(CAREER_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(STUDENT_TABLE);
    await queryInterface.dropTable(CLASS_STUDENT_TABLE);
  }
};

