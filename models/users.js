/* jshint indent: 2 */
var Sequelize = require('sequelize');


module.exports = function(sequelize) {
  return sequelize.define('users', {
    id: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_type: {
      type: Sequelize.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    active: {
      type: Sequelize.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    company_id: {
      type: Sequelize.STRING(10),
      allowNull: false,
      defaultValue: '0'
    },
    firstname: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    identity_no: {
      type: Sequelize.STRING(191),
      allowNull: true,
      unique: true
    },
    birth_date: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    start_date: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING(191),
      allowNull: false
    },
    avatar: {
      type: Sequelize.STRING(100),
      allowNull: true,
      defaultValue: 'default.jpg'
    },
    phone: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    phone_office: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    phone_office_ext: {
      type: Sequelize.STRING(6),
      allowNull: true
    },
    mobile: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    created_by: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    deleted_by: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    updated_by: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    deleted_at: {
      type: Sequelize.DATE,
      allowNull: true
    },
    remember_token: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true
    }
  }, {
    tableName: 'users'
  });
};
