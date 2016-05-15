'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipoEgresoSchema = {
    name: String,
    created_at: {
        type: Date,
        default: Date.now
    }
};

module.exports = mongoose.model('TipoEgreso', TipoEgresoSchema);