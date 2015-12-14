(function() {
    var app = angular.module('piggottApp', ['ngSanitize', 'ui.router']);

    app.controller('HomeController', ['$http', '$scope', function($http, $scope){
        $("#navigation").show();
        
        $scope.$on('$viewContentLoaded', function(event){
            $('#fullpage').fullpage();
            $.fn.fullpage.destroy();
            $.fn.fullpage.reBuild();
        });

        $scope.projects = portfolio;
        $scope.slideDecks = presentations;

        if(portfolio.length == 0 || presentations.length == 0){
            $http.get('/data/portfolio.json').success(function(data){
                portfolio = data;
                $scope.projects = portfolio;
            });
            $http.get('/data/presentations.json').success(function(data){
                presentations = data;
                $scope.slideDecks = presentations;
            });
        }
    }]);

    app.controller('PortfolioController', ['$http', '$scope', '$state', function($http, $scope, $state) {
        $("#navigation").hide();

        $scope.$on('$viewContentLoaded', function(event){
            $('#fullpage').fullpage();
            $.fn.fullpage.destroy();
            $.fn.fullpage.reBuild();
        });

        $scope.project = portfolio[$state.current.data.projectIndex];

        if(portfolio.length == 0){
            $http.get('/data/portfolio.json').success(function(data){
                portfolio = data;
                $scope.project = portfolio[$state.current.data.projectIndex];
            });
        }
    }]);

    app.controller('PresentationController', ['$http', '$scope', '$state', function($http, $scope, $state) {
        $("#navigation").hide();

        $scope.$on('$viewContentLoaded', function(event){
            $('#fullpage').fullpage();
            $.fn.fullpage.destroy();
            $.fn.fullpage.reBuild();
        });

        $scope.project = presentations[$state.current.data.projectIndex];

        if(presentations.length == 0){
            $http.get('/data/presentations.json').success(function(data){
                presentations = data;
                $scope.project = presentations[$state.current.data.projectIndex];
            });
        }
    }]);

    var portfolio = [];
    var presentations = [];

    app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        
        $urlRouterProvider
            .otherwise('/');
        
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: "HomeController"
            })
            .state('galeRedesign', {
                url: '/gale-redesign',
                templateUrl: 'templates/portfolio.html',
                controller: "PortfolioController",
                data: {
                    projectIndex: 0
                }
            })
            .state('galeResearcher', {
                url: '/gale-researcher',
                templateUrl: 'templates/portfolio.html',
                controller: "PortfolioController",
                data: {
                    projectIndex: 1
                }
            })
            .state('foreignLands', {
                url: '/foreign-lands',
                templateUrl: 'templates/portfolio.html',
                controller: "PortfolioController",
                data: {
                    projectIndex: 2
                }
            })
            .state('vidaTalk', {
                url: '/vidatalk',
                templateUrl: 'templates/portfolio.html',
                controller: "PortfolioController",
                data: {
                    projectIndex: 3
                }
            })
            .state('eTechnician', {
                url: '/etechnician',
                templateUrl: 'templates/portfolio.html',
                controller: "PortfolioController",
                data: {
                    projectIndex: 4
                }
            })
            .state('cosmosMLP', {
                url: '/cosmos-mlp',
                templateUrl: 'templates/portfolio.html',
                controller: "PortfolioController",
                data: {
                    projectIndex: 5
                }
            })
            .state('pairing', {
                url: '/power-of-promiscuous-pairing',
                templateUrl: 'templates/portfolio.html',
                controller: "PresentationController",
                data: {
                    projectIndex: 0
                }
            })
            .state('scenarios', {
                url: '/strength-in-scenarios',
                templateUrl: 'templates/portfolio.html',
                controller: "PresentationController",
                data: {
                    projectIndex: 1
                }
            })
            .state('menloWay', {
                url: '/agile-and-design-thinking',
                templateUrl: 'templates/portfolio.html',
                controller: "PresentationController",
                data: {
                    projectIndex: 2
                }
            });

        $locationProvider.html5Mode(true);
    });

})();
