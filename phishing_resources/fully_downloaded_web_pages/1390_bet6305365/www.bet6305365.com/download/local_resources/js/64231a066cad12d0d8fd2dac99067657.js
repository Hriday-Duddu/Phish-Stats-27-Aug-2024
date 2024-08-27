var login;
var loginCaptcha_lock = false;
var authLogin_lock = false;

var loader = ['ripple', 'ellipsis', 'facebook', 'dual-ring'];

$(document).ready(function(){
    getLivechat();

    $('#login_modal').on('shown.bs.modal', function () {
        type = $('.checkAccType input[type="checkbox"]:checked').val();
        remember = $("input[name='rememberMe']").is(":checked") ? true : false;
        checkCookie(type);
    });
})

function overlay_loading() {
    if ($('#overlay').is(':visible')) {
        $('#overlay').hide();
        $('#overlay #loader').removeClass();
    }
    else {
        var loaderClass = 'lds-' + loader[Math.floor(Math.random() * loader.length)];
        $('#overlay #loader').addClass(loaderClass);
        $('#overlay').show();
    }
}

function chgLang(_lang) {
    var post = {
        language: _lang,
    };
    $.ajax({
        type: "POST",
        url: "/graph/setlocale",
        data: post,
        success: function (data) {
            $.each(data['responses'], function (k, v) {
                var data = JSON.parse(atob(v.attributes));
                overlay_loading();
                location.reload();
            });
        },
        error: function (data) {
            Swal.fire({
                text: data.responseJSON.msg,
                type: "error",
                allowOutsideClick: false,
                confirmButtonText: lang.confirm
            });
        }
    });
}

function remove(name) {
    $(name).remove();
}

function windowOpen(link, width, height) {
    var width = width ? width : 800;
    var height = height ? height : 600;
    window.open(link, 'newWindow', 'menubar=0,toolbar=0,width=' + width + ',height=' + height);
}

function playGame(gameid, width, height) {
    transferProgress(gameid);
    login ? window.open('/loadgame/' + gameid, 'gameWindow', 'menubar=0,toolbar=0,width=' + width + ',height=' + height) : $('#login_modal').modal('show');
}

function tryGame(gameid, width, height) {
    window.open('/loadgame/' + gameid + '/1', 'gameWindow', 'menubar=0,toolbar=0,width=' + width + ',height=' + height);
}

function getMemberBalance(name) {
    var loading_img = '<i class="fa fa-spinner"></i>'
    $(name).html(loading_img);
    $.ajax({
        type: "GET",
        url: "/wallets",
        success: function (result) {
            data = JSON.parse(atob(result.data));
            $(name).delay(2000).text(data.main_wallet.bal.toFixed(2));
            getTransferStatus(name);
        },
        error: function (result) {
            data = JSON.parse(atob(result.responseJSON.data));
            Swal.fire({
                text: data.errormessage,
                type: "error",
                confirmButtonText: lang.confirm
            }).then((result) => {
                if (result.value) {
                    location.href = '/auth/logout';
                }
            })
        }
    });
}
function getTransferStatus(_name){
    var _requestData =
    {
        "requests":
            [
                {
                    "name": "transfersetting",
                    "query": '',
                },
            ]
    }
    $.ajax({
        type: "POST",
        url: "/graph/sesh",
        data: JSON.stringify(_requestData),
        success: function (result) {
            $.each(result['responses'], function (k, v) {
                var data = JSON.parse(atob(v.attributes));
                if(data.mdAccountSetting.optionkey !== 'auto') return;
                getLastgameWallet(data.mdAccountSetting.optionvalue, _name);
            });
        },
        error: function (result) {
            if (result.responseJSON.hasOwnProperty('data')) {
                data = JSON.parse(atob(result.responseJSON.data));
                Swal.fire({
                    text: data.errormessage,
                    type: "error",
                    confirmButtonText: lang.confirm
                }).then((result) => {
                    if (result.value) {
                        location.href = '/auth/logout';
                    }
                })
            } else if (result.responseJSON.hasOwnProperty('msg')) {
                Swal.fire({
                    text: result.responseJSON.msg,
                    type: "error",
                    confirmButtonText: lang.confirm
                });
            }
        }
    });
}

function getLastgameWallet(_lastGame, _name){
    $.ajax({
        type: "GET",
        url: '/wallet/' + _lastGame,
        success: function (result) {
            let total = result.data.wallet + result.data.mainwallet;
            $(_name).text(total.toFixed(2));
        },
        error: function (result) {
            data = JSON.parse(atob(result.responseJSON.data));
            Swal.fire({
                text: data.errormessage,
                type: "error",
                confirmButtonText: lang.confirm
            }).then((result) => {
                if (result.value) {
                    location.href = '/auth/logout';
                }
            })
        }
    });
}
function transferProgress(gameid) {
    var item =
    {
        gameid: gameid,
    };
    var _requestData =
    {
        "requests":
            [
                {
                    "name": "transferProcess",
                    "query": btoa(JSON.stringify(item)),
                },
            ]
    }
    $.ajax({
        type: "POST",
        url: "/graph/sesh",
        data: JSON.stringify(_requestData),
        success: function (result) { },
        error: function (result) { }
    });
}

function getLoginCaptcha() {
    if (loginCaptcha_lock) return;
    loginCaptcha_lock = true;
    $.ajax({
        type: "GET",
        url: "/captcha/login",
        success: function (result) {
            $('.captcha_img').attr('src', result);
            $('input[name=captcha]').val('');
            setTimeout(function () { loginCaptcha_lock = false; }, 1000);
        },
        error: function (result) { }
    });
}

function getLivechat() {
    var item =
    {
        name: ['livechat','extralivechat'],
    };
    var _requestData =
    {
        "requests":
            [
                {
                    "name": "getSetting",
                    "query": btoa(JSON.stringify(item)),
                },
            ]
    }
    $.ajax({
        type: "POST",
        url: "/graph/sesh",
        data: JSON.stringify(_requestData),
        success: function (result) {
            $.each(result['responses'], function (k, v) {
                var data = JSON.parse(atob(v.attributes));
                extraliveArr = [];
                if(data.extralivechat){
                    extralivechat = JSON.parse(data.extralivechat);
                    $.each(extralivechat, function (i, e) {
                        if(e.status){
                            extraliveArr[i] = e;
                        }
                    });
                }
               
                livechatUrl = data['livechat'];
            });
        },
        error: function (result) { 
        }
    });
}

function showLivechat(){

    if(extraliveArr.length >= 1){
        var tmp = '';
        tmp += '<div class="cs_list">'
        tmp += '<a class="btn" href="'+livechatUrl+'" target="_blank">'+lang.signin_cs+'</a>';

        $.each(extraliveArr, function(i, e){
                tmp += '<a class="btn" href="'+e.url+'" target="_blank">'+e.name+'</a>';
        });
        tmp += '</div>'

        Swal.fire({
            title: lang.select_cs,
            type:"info",
            html: tmp,
            showCloseButton:true,
            showConfirmButton: false,
            showCancelButton: false,
            allowOutsideClick: false,
        });
    }else{
        return window.open(livechatUrl);
    }
}

function focusLoginCaptcha() {
    if ($('.captcha_img').attr('src') != undefined) return;
    getLoginCaptcha();
}

function randomDecFromInterval(min, max) {
    return (Math.random() * (max - min)) + max;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function checkCookie(_name){
    if($.cookie(_name) != null){
        $('#'+_name).hide('');
    }else{
        $('#'+_name).show('');
    }
}
$(document).on("click", "*[data-gameid]", function () {
    var gameid = $(this).data('gameid');
    var width = $(this).data('width') ? $(this).data('width') : '800';
    var height = $(this).data('height') ? $(this).data('height') : '600';
    if ($(this).data('try'))
        tryGame(gameid, width, height);
    else
        playGame(gameid, width, height);
}).on('submit', 'form[action="/auth"]', function (evt) {
    overlay_loading();
}).ready(function () {
    setInterval(function () {
        $('.jump_number').html(function (i, val) {
            val = val.replace(/,/g, '');
            return (parseInt(val, 10) + randomIntFromInterval(2, 5)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        });
        $('.jump_decnum').html(function (i, val) {
            val = val.replace(/,/g, '');
            val = val * 100;
            val = (parseFloat(val) + randomDecFromInterval(30, 35));
            val = val / 100;
            val = val.toFixed(2);
            return (val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        });
        $('.box_jackpot').html(function (i, val) {
            val = val.replace(/,/g, '');
            val = (parseFloat(val) + randomDecFromInterval(30, 35));
            val = val.toFixed(2);
            return (val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        });
    }, 3000);
}).scroll(function () {
    var scrollpx = $(this).scrollTop();
    if (scrollpx >= (window.innerHeight / 2)) {
        $(".backtoTop").fadeIn();
    } else {
        $(".backtoTop").fadeOut();
    }
}).on("click", ".backtoTop", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}).on('change', 'input.image_file', function (evt) {
    if (evt.target.files.length == 0) return;
    _this = $(this);
    var file = evt.target.files[0];
    if (file['type'].match(/^image\//)) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var img = new Image();
            img.onload = function () {
                _this.next().val(e.target.result);
                var img_tag = _this.data('id');
                if (img_tag != undefined) {
                    var img_str = "<img src=\"" + e.target.result + "\" style=\"max-width: 300px; height: auto; padding-top: 20px;\">"
                    $('#' + img_tag).html(img_str);
                }
            }
            img.src = e.target.result;
        }

        reader.readAsDataURL(file);
    }
    else {
        Swal.fire({
            title: "上传失败!",
            text: "请选择图片档案!",
            type: "error",
            confirmButtonText: "确定"
        });
    }
});