angular.module('graphql.config', [])
    .config(function($httpProvider){
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })
    .constant('apiConfig', {
        'url': 'http://localhost:3000'
       // 'url': 'https://ninjarater.herokuapp.com'
    });
