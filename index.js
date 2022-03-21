
jQuery(document).ready(function($) {

    let offcanvasSelector = '#-off-canvas-134-5461';


    let delay = $(offcanvasSelector).children('.offcanvas-inner').data('first-delay');
    let stagger = $(offcanvasSelector).children('.offcanvas-inner').data('stagger');

    $(offcanvasSelector).find('.oxy-slide-menu_list > .menu-item').addClass('aos-animate');
    $(offcanvasSelector).find('.oxy-slide-menu_list > .menu-item').attr({
        "data-aos": $(offcanvasSelector).children('.offcanvas-inner').data('stagger-menu')
    });

    $(offcanvasSelector).find('[data-aos]').not('.not-staggered').each(function() {
        delay = delay + stagger;
        $(this).attr('data-aos-delay', delay);
    });
});
