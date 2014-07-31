'use strict';

angular.module('polymertestApp')
  .controller('VideoCtrl', function ($scope, $http, Auth, User) {

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });
  });
