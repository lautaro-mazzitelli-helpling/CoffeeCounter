$( document ).ready(function() {
    $('#btn-buy-coffee').click( function (e) {

        $('#myModal').modal('hide');

        alert($(this).attr("data-id"));

        console.log( e )


    })
})

