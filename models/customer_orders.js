var Sequelize = require('sequelize');


module.exports = function(sequelize) {
  return sequelize.define('customer_orders', {
    id: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customer_id: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    order_receipt_date: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    order_delivery_date: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    order_status: {
      type: Sequelize.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    vehicle_id: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    vehicle_load_date: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    total_price: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
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
    tableName: 'customer_orders'
  });
};
