'use strict';

angular.module('polymertestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/sampleapp', {
        templateUrl: 'app/sampleapp/sampleapp.html',
        controller: 'SampleAppCtrl'
      });
  });
