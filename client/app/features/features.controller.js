'use strict';

angular.module('polymertestApp')
  .controller('FeaturesCtrl', function ($scope, $http, Auth, User) {

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });
  });
