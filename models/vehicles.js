var Sequelize = require('sequelize');


module.exports = function(sequelize) {
  return sequelize.define('vehicles', {
    id: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true
    },
    created_by: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true
    },
    updated_by: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    deleted_at: {
      type: Sequelize.DATE,
      allowNull: true
    },
    deleted_by: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'vehicles'
  });
};
