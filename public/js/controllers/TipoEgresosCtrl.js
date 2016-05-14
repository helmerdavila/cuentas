angular.module('TipoEgresosCtrl', []).controller('TipoEgresosController', ['$scope', 'TipoEgreso', function($scope, TipoEgreso) {
    
    var obtenerTipoEgreso = function() {
        TipoEgreso.get().success(function(data) {
            $scope.tiposEgresos = data;
        });
    };

    obtenerTipoEgreso();

    $scope.agregarTipoEgreso = function() {
        if ($scope.tipoegreso === undefined || $scope.tipoegreso.name === '') {
            return false;
        }
        
        TipoEgreso.post($scope.tipoegreso).success(function() {
            obtenerTipoEgreso();
            $scope.tipoegreso = {};
            document.getElementById('nombreTipoEgreso').focus();
        });
    };

    $scope.actualizarTipoEgreso = function(data, id) {
        angular.extend(data, {id: id});
        return TipoEgreso.put(id, data).success(function() {
            obtenerTipoIngreso();
        });
    };

    $scope.eliminarTipoEgreso = function(id) {
        TipoEgreso.delete(id).success(function() {
            obtenerTipoEgreso();
        });
    };
}]);