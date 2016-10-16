'use strict';

/* Controllers */
angular.module('gql.controller.graphql', [])
.controller('graphQlController', function ($scope, $window, gql_services) {
    $scope.query = '';
    $scope.response = '';
    $scope.showResults = false;
    $scope.showSpinner = false;

    $scope.submitQuery = function()
    {
        $scope.showResults = false;
        $scope.showSpinner = true;
        console.log($scope.query);
        gql_services.submitQuery( $scope.query ).success(function (response)
        {
            $scope.showResults = true;
            $scope.showSpinner = false;
            $scope.response = JSON.stringify(response, null, 5);
            console.log($scope.response);
        });
    }
});