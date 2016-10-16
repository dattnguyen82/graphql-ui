'use strict';

angular.module('graphql', [
    'ngRoute',
    'graphql.services',
    'gql.controller.graphql',
    'gql.controller.rest',
    'graphql.config',
]).
config(function($routeProvider) {
         $routeProvider
         .when('/rest', {templateUrl: 'pages/rest.html', controller: 'restController', public: true})
        .when('/graphql', {templateUrl: 'pages/graphql.html', controller: 'graphQlController', public: true})
        .when('/schema', {templateUrl: 'pages/schema.html', public: true})
        .when('/model', {templateUrl: 'pages/model.html', public: true})
        .otherwise({redirectTo: '/'});
}).
run(function($rootScope, $http, $window) {

});
