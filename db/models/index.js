const { Class, ClassModel} = require('./class-model');
const { Career, CareerModel } = require('./career-model');
const { User, UserModel } = require('./user-model');
const { Student, StudentModel} = require('./student-model');
const { ClassStudent, ClassStudentModel } = require('./class-student-model');

function setupModels(sequelize){
  Class.init(ClassModel, Class.config(sequelize));
  Career.init(CareerModel, Career.config(sequelize));
  User.init(UserModel, User.config(sequelize));
  Student.init(StudentModel, Student.config(sequelize));
  ClassStudent.init(ClassStudentModel, ClassStudent.config(sequelize));

  Class.associate(sequelize.models);
  Career.associate(sequelize.models);
  User.associate(sequelize.models);
  Student.associate(sequelize.models);
  ClassStudent.asociate(sequelize.models);

}

module.exports = setupModels;
