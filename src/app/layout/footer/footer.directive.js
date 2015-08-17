(function () {
  'use strict';
  angular
    .module('personalSite.layout')
    .directive('footer', Footer);

  function Footer() {
    return {
      restrict: 'E',
      templateUrl: 'app/layout/footer/footer.tpl.html',
      scope: {}
    };
  }

})();
