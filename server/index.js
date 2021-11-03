const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const reportCtrl = require('./reports-ctrl');
const campaignCtrl = require('./campaign-ctrl');
app.get('/reports/', reportCtrl.getAllReports);
app.post('/reports/', reportCtrl.addReport);
app.get('/submit/', reportCtrl.getSubmitResponse);
app.get('/campaign/', campaignCtrl.getColorOne);
const port = process.env.PORT || 4545;
app.listen(port, console.log(`${port} up and running`));