(function () {
  'use strict';

  angular
  .module('personalSite.components')
  .directive('progressBar', progressBar);

  function progressBar() {
    return {
      restrict: 'EA',
      link: link
    };

    function link(scope, element, attrs) {
      $(element).find('.progress-bar').on('inview', function (event, isInView) {
        if (isInView) {
          $(this).css('width',  function() {
            return ($(this).attr('aria-valuenow')+'%');
          });
        }
      });
    }
  }

})();