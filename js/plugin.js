var callback = function() {
    var h = $(window).height();
    var he = $("header").outerHeight();

    var nav = $('.navbar');
    $(window).scroll(function() {
        if ($(this).scrollTop() > he) {
            nav.addClass("stickynav").addClass("animated slideInDown");
        } else {
            nav.removeClass("stickynav").removeClass("animated slideInDown");
        }
    });
};
$(window).load(callback);
$(window).resize(callback);

$(document).on('click', '.subservices a', function(event) {
    var he = $(".navbar").outerHeight();

    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - he
    }, 500);
});


$(window).load(function() {
    $(".loading").hide("fast");
})