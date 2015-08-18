(function () {
  'use strict';

  angular
    .module('personalSite.layout')
    .directive('psFooter', psFooter);

  function psFooter() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/layout/footer/footer.tpl.html',
      scope: {}
    };
  }

})();
