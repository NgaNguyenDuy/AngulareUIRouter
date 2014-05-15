var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'p-home.html'
        })
    
        .state('home.list', {
            url: '/list',
            templateUrl: 'p-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['bernese', 'Husky', 'Godlden'];
            }
        })
    
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
    
        .state('about', {
            url: '/about',
            views: {
                '': {
                    templateUrl: 'p-about.html'
                },
                'columnOne@about': {
                    template: 'Look I am a column'
                },
                
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'chrisController'
                }
            }
        });
});


routerApp.controller('chrisController', function($scope) {
    $scope.message = 'test';
    $scope.chrises = [
        {
            name: 'Nga Nguyen Duy',
            price: 50
        },
        {
            name: 'Hoang Van Loi',
            price: 3000
        },
        {
            name: 'Nguyen Van Thinh',
            price: 2222
        }
    ];
});
