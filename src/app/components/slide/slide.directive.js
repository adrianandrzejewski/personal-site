(function () {
  'use strict';

  angular
    .module('personalSite.components')
    .directive('slide', Slide);

  function Slide() {
    return {
      restrict: 'E',
      controller: SlideController,
      controllerAs: 'vm',
      templateUrl: 'app/components/slide/slide.tpl.html'
    };
  }

  SlideController.$inject = [];

  function SlideController() {
    var vm = this;

  }

})();