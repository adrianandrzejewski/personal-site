(function () {
  'use strict';

  angular
    .module('personalSite.components')
    .directive('scrollToTop', scrollToTop);

    function scrollToTop() {
      return {
        restrict: 'E',
        template: '<a href="#" class="btn scrollToTop"><i class="fa fa-angle-up"></i></a>',
        link: link
      };

      function link(scope, element, attrs) {
        $(window).scroll(function(){
          if ($(this).scrollTop() > 400) {
            $('.scrollToTop').fadeIn();
          } else {
            $('.scrollToTop').fadeOut();
          }
        });
    
        element.click(function(){
          $('html, body').animate({scrollTop : 0},800);
          return false;
        });
      }
    }

})();