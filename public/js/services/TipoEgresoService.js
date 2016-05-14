angular.module('TipoEgresoService', []).factory('TipoEgreso', ['$http', function($http) {
    return {
        get: function() {
            return $http.get('/api/tipoegresos');
        },
        
        put: function(id, dataTipoEgreso) {
            return $http.put('/api/tipoegresos/' + id, dataTipoEgreso);
        },
        
        post: function(dataTipoEgreso) {
            return $http.post('/api/tipoegresos', dataTipoEgreso);
        },
        
        delete: function(id) {
            return $http.delete('/api/tipoegresos/' + id);
        }
    }
}]);