'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipoEgresoSchema = new Schema({
    name: String
}, {
    timestamps: true
});

module.exports = mongoose.model('TipoEgreso', TipoEgresoSchema);