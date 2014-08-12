'use strict';

angular.module('polymertestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/app', {
        templateUrl: 'app/sample-app/sample-app.html',
        controller: 'SampleAppCtrl'
      });
  });
