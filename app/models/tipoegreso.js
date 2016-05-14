'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipoEgresoSchema = {
    name: String,
    created_at: Date
};

module.exports = mongoose.model('TipoEgreso', TipoEgresoSchema);