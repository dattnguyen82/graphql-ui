'use strict';

/* Controllers */
angular.module('gql.controller.rest', [])
.controller('restController', function ($scope, $window, gql_services) {
    $scope.response;
    $scope.api = "";


    $scope.showResults = false;
    $scope.showSpinner = false;

    $scope.callApi = function()
    {
        $scope.showResults = false;
        $scope.showSpinner = true;
        gql_services.callRestAPI($scope.api).success(function(response){
            $scope.showResults = true;
            $scope.showSpinner = false;
            console.log(response);
            $scope.response = JSON.stringify(response, null, 5);
            console.log($scope.response);
        });
    }
});