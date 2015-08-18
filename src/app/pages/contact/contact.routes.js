(function() {
  'use strict';

  angular
    .module('personalSite.contact')
    .config(['$routeProvider', config]);

  function config($routeProvider) {
    $routeProvider.when('/contact', {
      controller: 'ContactController',
      controllerAs: 'vm',
      templateUrl: 'app/pages/contact/contact.tpl.html'
    });
  }
})();