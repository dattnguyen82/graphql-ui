'use strict';

/* Controllers */
angular.module('gql.controller.graphql', [])
.controller('graphQlController', function ($scope, $window, gql_services) {

    var selectQueryData = {"query1":"{ enterprises{id, name} }",
        "query2":"{ enterprises{id, name, sites{id, name}} }",
        "query3":"{ enterprises{id, name, segments{id, name}} }",
        "query4":"{ enterprises{id, name, assets{id, name}} }",
        "query5":"{ sites{id, name, segments{id, name}} }",
        "query6":"{ sites{id, name, segments{id, name, assets{id,name}}} }",
        "query7":"{asset37: asset(id:37){id, name}asset38: asset(id:38){id, name}}",
        "query8":"query selectAsset($id: Int!){asset(id: $id){id, name, description}}",
        "query9":"query selectSegment($id: Int!,$includeAssets: Boolean!){segment(id: $id){id,name,assets @include (if: $includeAssets){id, name}}}",
        "query10": "mutation createEnt {createEnterprise(name:\"Company DEF\", description:\"Description for Company DEF\") {enterprise {name}}}"
    };


    $scope.query = '';
    $scope.response = '';
    $scope.showResults = false;
    $scope.showSpinner = false;
    $scope.selectQuery = "";
    $scope.args = "";

    $scope.submitQuery = function()
    {
        $scope.showResults = false;
        $scope.showSpinner = true;
        console.log($scope.query);
        gql_services.submitQuery( $scope.query, $scope.args ).success(function (response)
        {
            $scope.showResults = true;
            $scope.showSpinner = false;
            $scope.response = JSON.stringify(response, null, 5);
            console.log($scope.response);
        });
    }

    $scope.updateQuery = function()
    {
        $scope.query = selectQueryData[$scope.selectQuery];
    }

});