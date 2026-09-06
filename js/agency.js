// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var targetScrollPosition = $($anchor.attr('href')).offset().top - 50;
        var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            $('html, body').stop().scrollTop(targetScrollPosition);
        } else {
            $('html, body').stop().animate({
                scrollTop: targetScrollPosition
            }, 1250, 'easeInOutExpo');
        }
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Keep Bootstrap's visual menu state available to assistive technology.
    $('#bs-example-navbar-collapse-1')
        .on('shown.bs.collapse', function() {
            $('.navbar-toggle').attr('aria-expanded', 'true');
        })
        .on('hidden.bs.collapse', function() {
            $('.navbar-toggle').attr('aria-expanded', 'false');
        });

    $(document).on('keydown', function(event) {
        if (event.key === 'Escape' && $('.navbar-toggle').attr('aria-expanded') === 'true') {
            $('#bs-example-navbar-collapse-1').collapse('hide');
            $('.navbar-toggle').focus();
        }
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict
