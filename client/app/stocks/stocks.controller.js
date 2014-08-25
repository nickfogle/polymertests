'use strict';

angular.module('polymertestApp')
  .controller('StockCtrl', function ($scope, $http, Auth, User) {

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });
  });
