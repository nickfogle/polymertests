'use strict';

angular.module('polymertestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/features', {
        templateUrl: 'app/features/features.html',
        controller: 'FeaturesCtrl'
      });
  });
