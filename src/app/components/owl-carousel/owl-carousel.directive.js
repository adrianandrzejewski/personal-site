(function () {
  'use strict';

  angular
    .module('personalSite.components')
    .directive('owlCarousel', owlCarousel);

    function owlCarousel() {
      return {
        restrict: 'EA',
        link: link
      };

      function link(scope, element, attrs) {
        element.owlCarousel({
          navigation : true, // Show next and prev buttons
          navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          pagination: false,
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true
        });
      }
    }

})();