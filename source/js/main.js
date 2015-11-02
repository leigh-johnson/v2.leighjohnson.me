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
        console.log($(this));
    });

    $('#thepark-crm .overlap').hover(function(){
        // remove current active
        $('#thepark-crm .active').removeClass('active');
        $(this).addClass('active');
        console.log($(this))
    });

    // 
    // init fullpage
    $('#fullpage').fullpage({
        //navigation: true,
        //navigationTooltips: ['Hi', 'Data-driven Designs'],
        verticalCentered: false,
        paddingTop: '8em',
        afterRender: function(){
            setInterval(moveTimeline, 4200);
        }
    });
});