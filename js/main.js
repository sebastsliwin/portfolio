$(document).ready(function () {
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#menu').css({
                'backgroundColor': '#fff',
                'color': '#1ac056',
                'transition': '1s linear',
                'z-index': '10'
            });

            $('#menu a').css({
                'color': '#1ac056',
                'z-index': '10'
            });
        } else {
            $('#menu').css({
                'backgroundColor': 'transparent',
                'transition': '1s linear',
                'z-index': '10'
            });
            $('#menu a').css({
                'color': '#fff',
                'z-index': '10'
            });
        }
    });
});
