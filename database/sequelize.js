var Sequelize = require('sequelize');
Sequelize.prototype.Promise = Sequelize.Promise = Promise;
var sequelize = new Sequelize('carpet', 'burak', 'Burak4593*', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
        timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
module.exports = sequelize;