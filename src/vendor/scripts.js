/*
 Author: Ukieweb
 Template: ukieCard
 Version: 1.0
 URL: http://themeforest.net/user/UkieWeb
 */

$(document).ready(function(){

    "use strict";


    /*
     ----------------------------------------------------------------------
     Animated menu
     ----------------------------------------------------------------------
     */
    $('.menu .menu-img').hover(function() {

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

    /*
     ----------------------------------------------------------------------
     Animation
     ----------------------------------------------------------------------
     */
    $('.animated').appear(function() {
        var elem = $(this);
        var animation = elem.data('animation');
        if ( !elem.hasClass('visible') ) {
            var animationDelay = elem.data('animation-delay');
            if ( animationDelay ) {
                setTimeout(function(){
                    elem.addClass( animation + " visible" );
                }, animationDelay);
            } else {
                elem.addClass( animation + " visible" );
            }
        }
    });

    /*
     ----------------------------------------------------------------------
     Progress Bars
     ----------------------------------------------------------------------
     */
    $('.progress-bar').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).css('width',  function() {
                return ($(this).attr('aria-valuenow')+'%');
            });
        }
    });


    $('.dial').on('inview', function (event, isInView) {
        if (isInView) {
            var $this = $(this);
            var myVal = $this.attr("value");
            //var color = $this.attr("data-color"); // Uncomment after color selection
            var color = $.cookie("colour-skills"); // Delete after color selection
            $this.knob({
                readOnly: true,
                width: 160,
                height: 160,
                rotation: 'clockwise',
                thickness: .3,
                inputColor: color,
                bgColor: '#ffffff',
                fgColor: color,
                'draw' : function () {
                    $(this.i).val(this.cv + '%')
                }
            });
            $({
                value: 0
            }).animate({
                value: myVal
            }, {
                duration: 1000,
                easing: 'swing',
                step: function() {
                    $this.val(Math.ceil(this.value)).trigger('change');
                }
            });
        }
    });


}); // End $(document).ready(function(){















