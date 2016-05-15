'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let IngresoSchema = new Schema({
    cantidad: {
        type: Number,
        default: 1
    },
    monto: {
        type: Number,
        default: 0.00
    },
    _tipo_ingreso: {
        type: Schema.Types.ObjectId,
        ref: 'TipoIngreso'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Ingreso', IngresoSchema);