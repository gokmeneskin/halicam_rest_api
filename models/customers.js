/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customer_type: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true,
      defaultValue: '1'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    phone1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    phone2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    mobile1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    mobile2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    web: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sehir_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ilce_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    mahalle_id: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '0'
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tax_office: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    firm_title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    updated_by: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'customers'
  });
};
