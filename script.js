


$(document).ready(function() {
    $('#toggleButton').on('click', function() {
        if ($(this).hasClass('off')) {
            $(this).removeClass('off').addClass('on').text('on');
        } else {
            $(this).removeClass('on').addClass('off').text('off');
        }
    });
});