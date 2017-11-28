/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_order_details', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customer_order_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    customer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    order_receipt_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    order_delivery_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    product_group_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    width: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    height: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    unit: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    unit_price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    piece: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    tax_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    total_price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'customer_order_details'
  });
};
