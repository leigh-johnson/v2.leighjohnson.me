window.$ = window.jQuery = require('jquery')
var bootstrap = require('bootstrap');
var fullpage = require('fullpage.js');

$(document).ready(function(){
    // animate timeline
    var moveTimeline = function(index){
        /*var hovered = $('.timeline').find('.timeline-step:hover').length;
        if (hovered){
            return
        }
        */
        if (index){
            console.log('index: ' + index)
        }
        // if an index is supplied, hover state fired

        // otherwisee loop through index
        else{
                var current = $('.timeline-step.done');
                var index = current.data('timeline');
                //reset
                if (index == 4){
                    var next = $("li[data-timeline='1']");
                    $('.timeline-step.done .timeline-step-label').removeClass('active animated rotateInUpLeft');
                    current.removeClass('done');
                    next.addClass('done');
                    $('.timeline-step.done .timeline-step-label').addClass('active animated rotateInUpLeft');
                    return
                }
                // continue next
                nextIndex = index + 1
                var next = $("li[data-timeline='" + nextIndex +"']");
                $('.timeline-step.done .timeline-step-label').removeClass('active animated rotateInUpLeft');
                current.removeClass('done');
                next.addClass('done');
                $('.timeline-step.done .timeline-step-label').addClass('active animated rotateInUpLeft');
        }
    }

    // observe hover events
    $('.timeline-step-marker').on('hover touch', function(){
        //console.log($(this));
    });

    $('.overlap').hover(function(){
        // remove current active
        $('.overlap.active').removeClass('active');
        $(this).addClass('active');
       // console.log($(this))
    });

    // add .active class to .navbar-sub
    var toggleHighlight = function(slideAnchor){
        $('.navbar-sub li.active').removeClass('active');
        $('.navbar-sub li[data-menuanchor='+slideAnchor).addClass('active');
    }

    var toggleSubMenu = function(nextIndex){
        if (nextIndex == 2){
             $('.navbar-sub').removeClass('hide')
             $('.navbar-sub').addClass('animated bounceInLeft')   
         }
        else{
            $('.navbar-sub').addClass('hide')
             $('.navbar-sub').addClass('animated bounceInRight')   
        }
    }

    $('#slide-work').bind('mousewheel', function(e){
        /*
        if (window.location.hash == '#work/gameplay-design'){
            $.fn.fullpage.moveSectionDown();
            return
        }
        */
        if(e.originalEvent.wheelDelta /120 > 0) {
            $.fn.fullpage.moveSlideLeft();
        }
        else{
            $.fn.fullpage.moveSlideRight();       
             }
    });
      var gaPushAnchor = function(){
        // ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
        ga('send', 'pageview', { 'page': location.pathname + location.search + location.hash});
      }

    $('#next').click(function(){
        $.fn.fullpage.moveSlideRight();       
    });
    
    // init fullpage
    $('#fullpage').fullpage({
        //navigation: true,
        //navigationTooltips: ['Hi', 'Data-driven Designs'],
        verticalCentered: false,
        paddingTop: '4.2em',
        resize: false,
        fixedElements: '.navbar-fixed-top',
        menu: '.navbar-nav',
        loopHoriztonal: false,
        slidesNavigation: false,
        // disables vertical scrolling
        normalScrollElements: '#slide-work',
        afterRender: function(){
            setInterval(moveTimeline, 4200);
            //$.fn.fullpage.reBuild();
        },
        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
            toggleHighlight(slideAnchor);
        },
        onLeave: function (index, nextIndex, direction){
            toggleSubMenu(nextIndex);
            gaPushAnchor();

        }
    });
});