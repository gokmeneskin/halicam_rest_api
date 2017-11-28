/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_groups', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    price2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    price3: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    price4: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
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
    deleted_by: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'product_groups'
  });
};
