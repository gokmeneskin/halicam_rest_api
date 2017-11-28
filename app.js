const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = require('./routes/users');
app.use('/api/users', users);

const orders = require('./routes/orders');
app.use('/api/orders', orders);

const vehicles = require('./routes/vehicles');
app.use('/api/vehicles', vehicles);

const port = 6271;
app.listen(port, ()=>{
	console.log('Server başaltıldı, port: ' + port);
});