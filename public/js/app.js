var app = angular.module('cuentasApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'TipoIngresosCtrl', 'TipoIngresoService', 'xeditable']);

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3';
});