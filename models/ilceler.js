/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ilceler', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sehirler_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'ilceler'
  });
};
