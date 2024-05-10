$(document).ready(function() {
    // Toggle mobile menu
    $('.toggle-menu').click(function() {
        $('nav ul').slideToggle();
    });

    // Close mobile menu when clicking outside
    $(document).click(function(e) {
        var navMenu = $('nav ul');
        if (!navMenu.is(e.target) && navMenu.has(e.target).length === 0 && navMenu.is(':visible')) {
            navMenu.slideUp();
        }
    });
});