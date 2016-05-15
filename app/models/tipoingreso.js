'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipoIngresoSchema = new Schema({
    name: String
}, {
    timestamps: true
});

module.exports = mongoose.model('TipoIngreso', TipoIngresoSchema);