angular.module('TipoIngresoService', []).factory('TipoIngreso', ['$http', function($http) {
    return {
        get: function() {
            return $http.get('/api/tipoingresos');
        },
        
        put: function(id, dataTipoIngreso) {
            return $http.put('/api/tipoingresos/' + id, dataTipoIngreso);
        },
        
        post: function(dataTipoIngreso) {
            return $http.post('/api/tipoingresos', dataTipoIngreso);
        },
        
        delete: function(id) {
            return $http.delete('/api/tipoingresos/' + id);
        }
    }
}]);