'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');

// Archivos de Configuracion
var db = require('./config/db');
mongoose.connect(db.url);

var port = process.env.PORT || 3000;

// Declaracion de estaticos
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Rutas
require('./app/routes')(app);

app.listen(port, function() {
    console.log('Proyecto empezando en puerto ' + port);
});
exports = module.exports = app;
