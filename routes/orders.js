const express = require('express');
const router = express.Router();
const sequelize = require('../database/sequelize');

const customerorders = require('../models/customer_orders');
const CustomerOrders = customerorders(sequelize);

router.post('/onvehicle', (req, res) => {
	const vehicleId = req.body.vehicleId;
	CustomerOrders.findAll({
		where: {
			vehicle_id: vehicleId,
			order_status: 6
		}
	}).then((orders) => {
		res.json(orders);
	});
});

module.exports = router;	