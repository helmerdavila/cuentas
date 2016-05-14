var app = angular.module('cuentasApp', [
    'ngRoute', 
    'appRoutes', 
    'MainCtrl', 
    'TipoIngresosCtrl',
    'TipoEgresosCtrl', 
    'TipoIngresoService', 
    'TipoEgresoService', 
    'xeditable'
]);

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3';
});