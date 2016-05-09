var TipoIngreso = require('./models/tipoingreso');

module.exports = function(app) {

	// Rutas Backend ===========================================================
	// handle things like api calls
	// authentication routes
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

	// Rutas Frontend =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendFile('./public/index.html');
	});

};
