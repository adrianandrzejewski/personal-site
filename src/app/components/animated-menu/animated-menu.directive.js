(function () {
  'use strict';

  angular
  .module('personalSite.components')
  .directive('animatedMenu', animatedMenu);

  function animatedMenu() {
    return {
      restrict: 'EA',
      link: link
    };

    function link(scope, element, attrs) {
      (element).find('.menu-img').hover(function() {

        var $div = $(this);
        var img = document.createElement('img');
        var img_name = $div.attr("data-img-name");
        img.src = "images/menu/" + img_name + ".gif?t=" + new Date().getTime();


        $(img).load(function(){
          $div.attr("src",img.src);
        });

      }, function(){

        var $div = $(this);
        var img_name = $div.attr("data-img-name");
        var src = "images/menu/" + img_name + ".png";
        $div.attr("src",src);

      });
    }
  }

})();