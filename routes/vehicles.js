const express = require('express');
const router = express.Router();
const sequelize = require('../database/sequelize');

const vehicles = require('../models/vehicles');
const Vehicles = vehicles(sequelize);

router.get('/', (req, res) => {
	Vehicles.findAll().then((vehicles) => {
		res.json(vehicles);
	});
});

module.exports = router;