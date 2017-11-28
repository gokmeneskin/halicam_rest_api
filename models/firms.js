/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('firms', {
    id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'FRM01'
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    entitled_person: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    web: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: 'default_firm.png'
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sehir_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    iban: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    updated_by: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'firms'
  });
};
