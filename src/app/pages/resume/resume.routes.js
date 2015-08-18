(function() {
  'use strict';

  angular
    .module('personalSite.resume')
    .config(['$routeProvider', config]);

  function config($routeProvider) {
    $routeProvider.when('/resume', {
      controller: 'ResumeController',
      controllerAs: 'vm',
      templateUrl: 'app/pages/resume/resume.tpl.html'
    });
  }
})();