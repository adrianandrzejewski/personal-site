(function() {
  'use strict';

  angular
    .module('personalSite.profile')
    .config(['$routeProvider', config]);

  function config($routeProvider) {
    $routeProvider.when('/profile', {
      controller: 'ProfileController',
      controllerAs: 'vm',
      templateUrl: 'app/pages/profile/profile.tpl.html'
    });
  }
})();