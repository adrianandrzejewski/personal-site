(function() {
  'use strict';

  angular
    .module('personalSite.home')
    .config(['$routeProvider', config]);

  function config($routeProvider) {
    $routeProvider.when('/home', {
      controller: 'HomeController',
      controllerAs: 'vm',
      templateUrl: 'app/pages/home/home.tpl.html'
    });
  }
})();