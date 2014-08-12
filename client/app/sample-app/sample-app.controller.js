'use strict';

angular.module('polymertestApp')
  .controller('SampleAppCtrl', function ($scope, $http, Auth, User) {

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });
  });
