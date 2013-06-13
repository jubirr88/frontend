'use strict';

angular.module('app')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signin', {
        templateUrl: 'pages/signin/index.html',
        controller: 'Signin'
      });
  })
  .controller('Signin', function ($scope, $routeParams, $api) {
    $scope.github_signin_url = 'https://api.bountysource.com/auth/github?redirect_url=' + escape('http://localhost:9000/');
    $scope.facebook_signin_url = 'https://api.bountysource.com/auth/facebook?redirect_url=' + escape('http://localhost:9000/');
    $scope.twitter_signin_url = 'https://api.bountysource.com/auth/twitter?redirect_url=' + escape('http://localhost:9000/');
  });
