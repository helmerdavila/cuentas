'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipoIngresoSchema = {
    name: String,
    created_at: Date
};

module.exports = mongoose.model('TipoIngreso', TipoIngresoSchema);