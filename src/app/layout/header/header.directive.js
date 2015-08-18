(function () {
  'use strict';

  angular
    .module('personalSite.layout')
    .directive('psHeader', psHeader);

  function psHeader() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/layout/header/header.tpl.html',
      scope: {
        photoName: '@',
        title: '@',
        subTitle: '@'
      }
    };
  }

})();
