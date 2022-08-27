
$(document).ready(function () {
    //function change
    $('#input').change(function () {
        let input = $(this).val();
        $('ul').append('<li>' + input + '<i class="fas fa-check"></i> <i class="fas fa-trash"></i>  </li > ');
        $(this).val('');
    });

    //function sparisce in 2 seconds
    $('ul').on('click', '.fa-trash', function () {
        $(this).parent('li').fadeOut('fast');
    });

    $('ul').on('click', '.fa-check', function () {
        $(this).parent('li').toggleClass('checked');
    });

});