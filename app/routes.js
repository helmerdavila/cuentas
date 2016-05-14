var TipoIngreso = require('./models/tipoingreso');
var TipoEgreso = require('./models/tipoegreso');

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
        nuevoTipoIngreso.created_at = new Date;
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
    
    // Rutas Backend ===========================================================
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
        nuevoTipoEgreso.created_at = new Date;
        
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

	// Rutas Frontend =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendFile('./public/index.html');
	});

};
