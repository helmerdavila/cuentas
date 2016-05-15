'use strict';

let TipoIngreso = require('./models/tipoingreso');
let TipoEgreso = require('./models/tipoegreso');
let Ingreso = require('./models/ingreso');

let respuestaMensaje = (codigo, mensaje, descripcion) => {
    return {
        codigo: codigo,
        mensaje: mensaje,
        descripcion: descripcion
    }
}

module.exports = function(app) {

	// Rutas Tipo Ingreso ======================================================
    app.get('/api/tipoingresos', function(req, res) {
        TipoIngreso.find({}, function(err, resultado) {
            if (err) {
                res.send(err);
            }
            res.json(resultado);
        });
    });
    
    app.post('/api/tipoingresos', function(req, res) {
        var nuevoTipoIngreso = new TipoIngreso(req.body);
        
        nuevoTipoIngreso.save(function(err) {
            TipoIngreso.find({}, function(err, resultado) {
                res.json(resultado);
            });
        });
    });
    
    app.get('/api/tipoingresos/:id', function(req, res) {
        var idTipoIngreso = req.params.id;
        
        TipoIngreso.findById(idTipoIngreso, function(err, resultado) {
            if (err) {
                res.send(err);
            }    
            res.json(resultado);
        });
    });
    
    app.put('/api/tipoingresos/:id', function(req, res) {
        var idTipoIngreso = req.params.id;
        
        TipoIngreso.findByIdAndUpdate(idTipoIngreso, { name: req.body.name } , function(err, resultado) {
            if (err) {
                res.send(err);
            }
            res.json(resultado);
        });
    });
    
    app.delete('/api/tipoingresos/:id', function(req, res) {
        var idTipoIngreso = req.params.id;
    
        TipoIngreso.findByIdAndRemove(idTipoIngreso, function(err, resultado) {
            if (err) {
                res.send(err);
            }
            res.json(resultado);
        });
    });
    
    // Rutas Tipo Egreso =======================================================
    app.get('/api/tipoegresos', function(req, res) {
        TipoEgreso.find({}, function(err, resultado) {
            if (err) {
                res.send(err);
            }
            res.json(resultado);
        });
    });
    
    app.post('/api/tipoegresos', function(req, res) {
        var nuevoTipoEgreso = new TipoEgreso(req.body);
        
        nuevoTipoEgreso.save(function(err) {
            TipoEgreso.find({}, function(err, resultado) {
                res.json(resultado);
            });
        });
    });
    
    app.get('/api/tipoegresos/:id', function(req, res) {
        var idTipoEgreso = req.params.id;
        
        TipoEgreso.findById(idTipoEgreso, function(err, resultado) {
            if (err) {
                res.send(err);
            }
            res.json(resultado);
        });
    });
    
    app.put('/api/tipoegresos/:id', function(req, res) {
        var idTipoEgreso = req.params.id;
        
        TipoEgreso.findByIdAndUpdate(idTipoEgreso, { name: req.body.name } , function(err, resultado) {
            if (err) {
                res.send(err);
            }
            res.json(resultado);
        });
    });
    
    app.delete('/api/tipoegresos/:id', function(req, res) {
        var idTipoEgreso = req.params.id;
    
        TipoEgreso.findByIdAndRemove(idTipoEgreso, function(err, resultado) {
            if (err) {
                res.send(err);
            }
            res.json(resultado);
        });
    });
    
    // Rutas Ingreso ===========================================================
    app.get('/api/ingresos', (req, res) => {
        Ingreso.find({})
            .populate('_tipo_ingreso')
            .then((resultado) => {
                res.json(resultado);
            })
            .catch((err) => {
                res.status(500).send(respuestaMensaje(500, 'Algo fue mal', 'No se pudieron listar los ingresos'))
            });
    });
    
    app.post('/api/ingresos', (req, res) => {
        let nuevoIngreso = new Ingreso(req.body);
        
        nuevoIngreso.save()
            .then(() => {
                res.status(201).send(respuestaMensaje(201, 'Éxito', 'Se creó el ingreso con éxito'));
            })
            .catch((err) => {
                res.status(500).send(respuestaMensaje(500, 'Algo fue mal', 'No se pudo crear el nuevo ingreso'));
            });
    });
    
    app.get('/api/ingresos/:id', (req, res) => {
        let idIngreso = req.params.id;
        
        Ingreso.findById(idIngreso)
            .populate('_tipo_ingreso')
            .then((resultado) => {
                res.json(resultado);
            })
            .catch((err) => {
                res.status(404).send(respuestaMensaje(404, 'No encontrado', 'No se encontró el ingreso respectivo'));
            });
    });
    
    app.put('/api/ingresos/:id', (req, res) => {
        let idIngreso = req.params.id;
        let ahora = new Date;
        let nuevosDatosIngreso = {
            cantidad: req.body.cantidad,
            monto: req.body.monto,
            _tipo_ingreso: req.body._tipo_ingreso
        }
        
        Ingreso.findByIdAndUpdate(idIngreso, nuevosDatosIngreso)
            .then((resultado) => {
                res.json(resultado);                
            })
            .catch((err) => {
                res.status(500).send(respuestaMensaje(500, 'Error al actualizar', 'No se pudo actualizar el ingreso'));
            });
    });
    
    app.delete('/api/ingresos/:id', (req, res) => {
        let idIngreso = req.params.id;
    
        Ingreso.findByIdAndRemove(idIngreso)
            .then(() => {
                res.send(respuestaMensaje(200, 'Eliminado', 'Se eliminó el ingreso con éxito'));
            })
            .catch((err) => {
                res.status(404).send(respuestaMensaje(404, 'Error al eliminar', 'No se pudo encontrar el ingreso'))
            });
    });

	// Rutas Frontend =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendFile('./public/index.html');
	});

};
