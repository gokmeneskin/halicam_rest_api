/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sehirler', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ulkeler_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    plakaCode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phoneCode: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'sehirler'
  });
};
