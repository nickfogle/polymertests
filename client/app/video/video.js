'use strict';

angular.module('polymertestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/video', {
        templateUrl: 'app/video/video.html',
        controller: 'VideoCtrl'
      });
  });
