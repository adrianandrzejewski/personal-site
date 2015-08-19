(function () {
  'use strict';

  angular
    .module('personalSite.components')
    .directive('niceScroll', niceScroll);

    function niceScroll() {
      return {
        restrict: 'EA',
        link: link
      };

      function link(scope, element, attrs) {
        element.niceScroll({
          cursorcolor: '#fff',
          cursoropacitymin: '0',
          cursoropacitymax: '1',
          cursorwidth: '2px',
          zindex: 999999,
          horizrailenabled: false,
          enablekeyboard: false
        });
      }
    }

})();