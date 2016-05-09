'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipoIngresoSchema = {
    name: String
};

module.exports = mongoose.model('TipoIngreso', TipoIngresoSchema);