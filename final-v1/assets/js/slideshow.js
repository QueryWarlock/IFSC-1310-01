$(document).ready(function () {
    $('.slideshow').each(function () {
        $(this).cycle({
            fx: 'fade',
            speed: 500,
            timeout: 3000
        });
    });
});
