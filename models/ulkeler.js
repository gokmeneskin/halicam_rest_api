/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ulkeler', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tr: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    en: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'ulkeler'
  });
};
