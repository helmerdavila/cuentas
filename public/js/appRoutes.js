angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'MainController'
        })
        .when('/tipo-ingresos', {
            templateUrl: 'partials/tipoingresos.html',
            controller: 'TipoIngresosController'
        })
        .otherwise({
            redirectTo: '/'
        });
        
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
}]); 