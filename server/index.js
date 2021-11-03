const express = require('express');
const path = require('path');
// const cors = require('cors');

const app = express();
// app.use(express.json());
// app.use(cors());
app.get('/', function(req, res){

res.sendFile(path.join(__dirname, "../login.html"));
});

app.get('/', function(req, res){

res.sendFile(path.join(__dirname, "../campaign.html"));
});

app.get('/', function(req, res){

res.sendFile(path.join(__dirname, "../reports.html"));
});

app.get('/', function(req, res){

res.sendFile(path.join(__dirname, "../login.css"));
});
    
app.get('/', function(req, res){
    
res.sendFile(path.join(__dirname, "../campaign.css"));
});
    
app.get('/', function(req, res){
    
res.sendFile(path.join(__dirname, "../reports.css"));
});
    

app.get('/', function(req, res){

res.sendFile(path.join(__dirname, "../login.js"));
});
    
app.get('/', function(req, res){
    
res.sendFile(path.join(__dirname, "../campaign.js"));
});
    
app.get('/', function(req, res){
    
res.sendFile(path.join(__dirname, "../reports.js"));
});
    

const reportCtrl = require('./reports-ctrl');
const campaignCtrl = require('./campaign-ctrl');
app.get('/reports/', reportCtrl.getAllReports);
app.post('/reports/', reportCtrl.addReport);
app.get('/submit/', reportCtrl.getSubmitResponse);
app.get('/campaign/', campaignCtrl.getColorOne);

const port = process.env.PORT || 4545;
// app.listen(port, console.log(`${port} up and running`));
app.listen(port, () => console.log(`${port} up and running`));