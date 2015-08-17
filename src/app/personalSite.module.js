(function() {
  'use strict';

  angular.module('personalSite', [
    'ngRoute',
    'personalSite.components',
    'personalSite.layout',
    'personalSite.pages',
    ])
  .config(config);

  function config($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/home' });
  }

})();