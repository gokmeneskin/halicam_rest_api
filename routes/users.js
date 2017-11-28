const express = require('express');
const router = express.Router();
const nodePhpPass = require("node-php-password");
const sequelize = require('../database/sequelize');
const user = require('../models/users');

const User = user(sequelize);

router.get('/', (req, res) => {
	User.findAll({
		where: {
			active: 1
		}
	}).then((users) => {
		res.json(users);
	});
});

router.get('/:phone', (req, res) => {
	console.log(req.params.phone);
	User.findOne({
		where: {
			phone: req.params.phone,
			active: 1
		}
	}).then((user) => {
		res.json(user);
	});
});

router.post('/auth', (req, res) => {
	const phone = req.body.phone;
	const password = req.body.password;
	User.findOne({
		where: {
			phone: phone,
			active: 1
		}
	}).then((user) => {
		if(user != null) {
			if(nodePhpPass.verify(password, user.password)) {
				res.json({
					success: true,
					firstname: user.firstname,
					lastname: user.lastname,
					phone: user.phone,
					token: user.remember_token
				});
			} else {
				res.json({
					success: false,
					msg: 'Şifre hatalı'
				});
			}
		} else {
			res.json({
				success: false,
				msg: 'Telefon numarası hatalı'
			});
		}
	});
});

router.post('/token', (req, res) => {
	const phone = req.body.phone;
	const token = req.body.token;
	User.findOne({
		where: {
			active: 1,
			phone: phone,
			remember_token: token
		}
	}).then((user) => {
		if(user != null) {
			res.json({
				success: true,
				firstname: user.firstname,
				lastname: user.lastname,
				phone: user.phone,
				token: user.remember_token
			});
		} else {
			res.json({
				success: false,
				msg: 'Token hatalı'
			});
		}
	});
});

module.exports = router;