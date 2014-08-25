'use strict';

angular.module('polymertestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/stocks', {
        templateUrl: 'app/stocks/stocks.html',
        controller: 'StockCtrl'
      });
  });
