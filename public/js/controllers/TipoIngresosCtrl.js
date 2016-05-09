angular.module('TipoIngresosCtrl', []).controller('TipoIngresosController', ['$scope', 'TipoIngreso', function($scope, TipoIngreso) {
    
    var obtenerTipoIngreso = function() {
        TipoIngreso.get().success(function(data) {
            $scope.tiposIngresos = data;
        });
    };

    obtenerTipoIngreso();

    $scope.agregarTipoIngreso = function() {
        if ($scope.tipoingreso === undefined || $scope.tipoingreso.name === '') {
            return false;
        }
        
        TipoIngreso.post($scope.tipoingreso).success(function() {
            obtenerTipoIngreso();
            $scope.tipoingreso = {};
            document.getElementById('nombreTipoIngreso').focus();
        });
    };

    $scope.actualizarTipoIngreso = function(data, id) {
        angular.extend(data, {id: id});
        return TipoIngreso.put(id, data).success(function() {
            obtenerTipoIngreso();
        });
    };

    $scope.eliminarTipoIngreso = function(id) {
        TipoIngreso.delete(id).success(function() {
            obtenerTipoIngreso();
        });
    };
}]);