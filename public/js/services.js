'use strict';

angular.module('graphql.services', ['graphql.config'])
    .factory('gql_services', function ($http, apiConfig) {

      var schemaUrl = 'https://gql-demo.run.aws-usw02-pr.ice.predix.io/gql/schema';
      var queryUrl = 'https://gql-demo.run.aws-usw02-pr.ice.predix.io/gql/query';
      var baseUrl = 'https://gql-demo.run.aws-usw02-pr.ice.predix.io/rest';

      var gqlAPI = {};

      gqlAPI.getSchema = function()
      {
        return $http({method: 'GET', url: schemaUrl});
      };

      gqlAPI.submitQuery = function(data)
      {
          console.log(data);
        return $http({
          method: 'POST',
          data: data,
          url:queryUrl
        });
      };

      gqlAPI.callRestAPI = function (api) {

          if (api.charAt(0) != '/')
          {
              api = '/' + api;
          }

          var url = baseUrl + api;

          console.log('url: ' + url);

          return $http({
              method: 'GET',
              url: url
          })

      };

      return gqlAPI;
    })
    .factory('app_cache', function ($cacheFactory) {
      return $cacheFactory('app_cache', {
        capacity: 50000
      })
    });
