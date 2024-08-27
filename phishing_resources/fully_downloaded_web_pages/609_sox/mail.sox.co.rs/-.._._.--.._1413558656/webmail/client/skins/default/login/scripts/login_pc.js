function focusFirstElement(fieldset)
{
	$("input[type='text'],input[type='button'],input[type='submit'],a[href],button",fieldset).first().focus();
}

$(document).ready(function() {
		var sh_lang=0, sh_interface=0, sh_bot=0, menu_bot_id="help_desktop", menu_bot_sub="help_desk_win", scroll_plus=0,activePlatform = 'more_bot_cont_platform_desktop';
		
		/* HWN CTZ */
		if(document.getElementById('ctz')){document.getElementById('ctz').value=(new Date().getTimezoneOffset())*(-1);}
		/**/
		/* HWN - placeholder for older browser */
		if(!Modernizr.input.placeholder)
		{
			$(":input[placeholder]").placeholder();
			$(":input[placeholder]").each(function(){
				$(this).attr('title',$(this).attr('placeholder'));
			});
		}
		/* */
		
		/* HWN - check location hash */
		if(location.hash.replace('#','')=='support')
		{
			setTimeout(function(){
				$('.link_contact').click();
			},100);
		}
		/**/
		
		
		
		function show_lang(){
			
			$("#interface_box").hide();
			
			if(sh_lang==0) {
				
				$("#more_lang_arrow").removeClass('more_arrow_bot'); $("#more_lang_arrow").addClass('more_arrow_top');
				
				$("#more_top").css( "border-bottom","1px solid #FFFFFF");
				
				$(".more_top_close").show();
				
				$("#language_box").show();
				// 457
				$("#more_top").animate({height: 441},{queue: false, duration: 500 });
				sh_lang=1;
				scroll_plus=441;
			}
			else {
				$(".more_top_close").hide();
			
				$("#more_top").css( "border-bottom","1px solid #DBDBDB");
				
				$("#more_lang_arrow").removeClass('more_arrow_top'); $("#more_lang_arrow").addClass('more_arrow_bot');
				
				$("#more_top").animate({height: 1}, 500, function(){$("#language_box").hide();});
				$("html,body").animate({ scrollTop: 0 }, 500);
				sh_lang=0;
				scroll_plus=0;
				
			}
		}
		
		function show_interface(){
			
			$("#language_box").hide();
			
			if(sh_interface==0) {
				
				$("#more_desktop_arrow").removeClass('more_arrow_bot'); $("#more_desktop_arrow").addClass('more_arrow_top');
				
				$("#more_top").css( "border-bottom","1px solid #FFFFFF");
				
				$(".more_top_close").show();
				
				$("#interface_box").show();
				//195
				$("#more_top").animate({height: 189},{queue: false, duration: 500 });
				sh_interface=1;
				scroll_plus=189;
			}
			else {
				$(".more_top_close").hide();
			
				$("#more_top").css( "border-bottom","1px solid #DBDBDB");
				
				$("#more_desktop_arrow").removeClass('more_arrow_top'); $("#more_desktop_arrow").addClass('more_arrow_bot');

				$("#more_top").animate({height: 1}, 500, function(){$("#interface_box").hide();});
				$("html,body").animate({ scrollTop: 0 }, 500);
				sh_interface=0;
				scroll_plus=0;
			}
		}
		
		function show_bot() {
			
			var p = $("#bot_menu_progress");
			if(p.val()==1){
				return;
			}
			var l = $("#more_lang_value").text();
			if(menu_bot_id=="help_desktop"){

				$.get('server/help.html?id=help_win_desktop&l='+l, function(data) {$('#help_slide1').html(data);});
				$.get('server/help.html?id=help_win_osync&l='+l, function(data) {$('#help_slide2').html(data);});
				$.get('server/help.html?id=help_win_2013&l='+l, function(data) {$('#help_slide3').html(data);});
				
				if(activePlatform!='more_bot_cont_platform_desktop'){
					p.val(1);
					$('#'+activePlatform).fadeOut(function(){$('#more_bot_cont_platform_desktop').fadeIn();p.val(0);});
					activePlatform = 'more_bot_cont_platform_desktop';
				}
				
				if(menu_bot_sub=="help_desk_win"){$("#help_slide").animate({left: 0},{duration: 500, queue: false });}
				else if(menu_bot_sub=="help_desk_osx"){$("#help_slide").animate({left: -630},{duration: 500, queue: false });}
				else if(menu_bot_sub=="help_desk_2013"){$("#help_slide").animate({left: -1260},{duration: 500, queue: false });}
				else{ menu_bot_sub = "help_desk_win"; }
			}
			else if(menu_bot_id=="help_tablet"){
				$.get('server/help.html?id=help_tablet_and&l='+l, function(data) {$('#help_slide1').html(data);});
				$.get('server/help.html?id=help_tablet_ios&l='+l, function(data) {$('#help_slide2').html(data);});
				$.get('server/help.html?id=help_tablet_win&l='+l, function(data) {$('#help_slide3').html(data);});
				
				//$('#more_bot_cont_platform_desktop').fadeOut(function(){$('#more_bot_cont_platform_mobile').fadeIn();});
				if(activePlatform!='more_bot_cont_platform_mobile'){
					p.val(1);
					$('#'+activePlatform).fadeOut(function(){$('#more_bot_cont_platform_mobile').fadeIn();p.val(0);});
					activePlatform = 'more_bot_cont_platform_mobile';
				}
				if(menu_bot_sub=="help_mobile_and"){$("#help_slide").animate({left: 0},{duration: 500, queue: false });}
				else if(menu_bot_sub=="help_mobile_ios"){$("#help_slide").animate({left: -630},{duration: 500, queue: false });}
				else if(menu_bot_sub=="help_mobile_win"){$("#help_slide").animate({left: -1260},{duration: 500, queue: false });}
				else{ menu_bot_sub = "help_mobile_and"; }
			}
			else if(menu_bot_id=="help_phone"){
				$.get('server/help.html?id=help_phone_and&l='+l, function(data) {$('#help_slide1').html(data);});
				$.get('server/help.html?id=help_phone_ios&l='+l, function(data) {$('#help_slide2').html(data);});
				$.get('server/help.html?id=help_phone_win&l='+l, function(data) {$('#help_slide3').html(data);});
				
				if(activePlatform!='more_bot_cont_platform_mobile'){
					p.val(1);
					$('#'+activePlatform).fadeOut(function(){$('#more_bot_cont_platform_mobile').fadeIn();p.val(0);});
					activePlatform = 'more_bot_cont_platform_mobile';
				}
				if(menu_bot_sub=="help_mobile_and"){$("#help_slide").animate({left: 0},{duration: 500, queue: false });}
				else if(menu_bot_sub=="help_mobile_ios"){$("#help_slide").animate({left: -630},{duration: 500, queue: false });}
				else if(menu_bot_sub=="help_mobile_win"){$("#help_slide").animate({left: -1260},{duration: 500, queue: false });}
				else{ menu_bot_sub = "help_mobile_and"; }
			}else if(menu_bot_id=="help_osx"){
				$.get('server/help.html?id=help_osx_messages&l='+l, function(data) {$('#help_slide1').html(data);});
				$.get('server/help.html?id=help_osx_contacts&l='+l, function(data) {$('#help_slide2').html(data);});
				$.get('server/help.html?id=help_osx_calendar&l='+l, function(data) {$('#help_slide3').html(data);});
				if(activePlatform!='more_bot_cont_platform_osx'){
					p.val(1);
					$('#'+activePlatform).fadeOut(function(){$('#more_bot_cont_platform_osx').fadeIn();p.val(0);});
					activePlatform = 'more_bot_cont_platform_osx';
				}
				if(menu_bot_sub=="help_osx_messages"){$("#help_slide").animate({left: 0},{duration: 500, queue: false });}
				else if(menu_bot_sub=="help_osx_contacts"){$("#help_slide").animate({left: -630},{duration: 500, queue: false });}
				else if(menu_bot_sub=="help_osx_calendar"){$("#help_slide").animate({left: -1260},{duration: 500, queue: false });}
				else{ menu_bot_sub = "help_osx_messages"; }
			}
			if(restrictions[menu_bot_sub]){
				$("#help_restriction").fadeIn();
			}else{
				$("#help_restriction").fadeOut();		
			}
		}
		
		function bot_menu(object) {
			$("#help_slide").animate({left: 0},{duration: 500, queue: false });
			
			//$("#more_bot_cont_platform div").css( "color","#3399cc");
			$("#help_desk_win").css( "background-position","0px -292px");
			$("#help_desk_osx").css( "background-position","0px -292px");
			$("#help_desk_2013").css( "background-position","0px -292px");
			$("#help_mobile_and").css( "background-position","-420px -292px");
			$("#help_mobile_ios").css( "background-position","-560px -292px");
			$("#help_mobile_win").css( "background-position","-700px -292px");
			$("#help_osx_contacts").css( "background-position","-210px -292px");
			$("#help_osx_messages").css( "background-position","-210px -292px");
			$("#help_osx_calendar").css( "background-position","-210px -292px");
			
			

			$('#more_bot_menu .active').removeClass('active');

			if(menu_bot_id=="help_desktop"){
				$("#help_desk_win").addClass("active");
				$("#help_desk_win").css( "background-position","0px -244px");
			}
			else if(menu_bot_id=="help_osx"){
				$("#help_osx_messages").addClass("active");
				$("#help_osx_messages").css( "background-position","0px -244px");
			}else if(menu_bot_id=="help_tablet") {
				$("#help_tablet_and").addClass("active");
				$("#help_tablet_and").css( "background-position","-420px -244px");
			}else{
				$("#help_mobile_and").addClass("active");
				$("#help_mobile_and").css( "background-position","-420px -244px");
			}			
			
			//$("#more_bot_menu div").css( "color","#333333");
			
			$("#"+object).addClass("active");
			
			if($("#"+object).attr('id')=="help_desktop"){$("#more_bot_menu").css( "background-position","0px -401px");}
			else if ($("#"+object).attr('id')=="help_osx"){$("#more_bot_menu").css( "background-position","-260px -401px");}
			else if ($("#"+object).attr('id')=="help_tablet"){$("#more_bot_menu").css( "background-position","-520px -401px");}
			else if ($("#"+object).attr('id')=="help_phone"){$("#more_bot_menu").css( "background-position","-780px -401px");}
		}
		
		
		function bot_submenu(object) {
			
			$('#more_bot_cont_platform .active').removeClass('active');
			
			//$("#more_bot_cont_platform div").css( "color","#3399cc");
			$("#help_desk_win").css( "background-position","0px -292px");
			$("#help_desk_osx").css( "background-position","0px -292px");
			$("#help_desk_2013").css( "background-position","0px -292px");
			$("#help_mobile_and").css( "background-position","-420px -292px");
			$("#help_mobile_ios").css( "background-position","-560px -292px");
			$("#help_mobile_win").css( "background-position","-700px -292px");

			$("#help_osx_contacts").css( "background-position","-210px -292px");
			$("#help_osx_messages").css( "background-position","-210px -292px");
			$("#help_osx_calendar").css( "background-position","-210px -292px");
			$("#"+object).addClass("active");
			
			if($("#"+object).attr('id')=="help_desk_win"){$("#help_desk_win").css( "background-position","0px -244px");}
			else if ($("#"+object).attr('id')=="help_desk_osx"){$("#help_desk_osx").css( "background-position","0px -244px");}
			else if ($("#"+object).attr('id')=="help_desk_2013"){$("#help_desk_2013").css( "background-position","0px -244px");}
			else if ($("#"+object).attr('id')=="help_mobile_and"){$("#help_mobile_and").css( "background-position","-420px -244px");}
			else if ($("#"+object).attr('id')=="help_mobile_ios"){$("#help_mobile_ios").css( "background-position","-560px -244px");}
			else if ($("#"+object).attr('id')=="help_mobile_win"){$("#help_mobile_win").css( "background-position","-700px -244px");}
			else if ($("#"+object).attr('id')=="help_osx_messages"){$("#help_osx_messages").css( "background-position","-210px -244px");}
			else if ($("#"+object).attr('id')=="help_osx_contacts"){$("#help_osx_contacts").css( "background-position","-210px -244px");}
			else if ($("#"+object).attr('id')=="help_osx_calendar"){$("#help_osx_calendar").css( "background-position","-210px -244px");}
			}
		
		
		// top more
		
		$("#interface_pro").click(function(){
			$('#more_desktop_text').text($(this).text());
			$("#login_interface").val("pro");
			if($("#filtered_query_string").val()){
				var fq = $("#filtered_query_string").val();
			}else{
				var fq = '';
			}
			$("#login_form").attr("action","basic/" + fq);
			
			$("#interface_pro").removeClass("interface_desktop");$("#interface_pro").addClass("interface_desktop_a");
			$("#interface_basic").removeClass("interface_tablet_a");$("#interface_basic").addClass("interface_tablet");
			$("#interface_pda").removeClass("interface_phone_a");$("#interface_pda").addClass("interface_phone");

			sh_interface=1;
			show_interface();
		});
		
		$("#interface_basic").click(function(){
			$('#more_desktop_text').text($(this).text());
			$("#login_interface").val("basic");
			if($("#filtered_query_string").val()){
				var fq = $("#filtered_query_string").val();
			}else{
				var fq = '';
			}
			$("#login_form").attr("action","basic/" + fq);
			
			$("#interface_pro").removeClass("interface_desktop_a");$("#interface_pro").addClass("interface_desktop");
			$("#interface_basic").removeClass("interface_tablet");$("#interface_basic").addClass("interface_tablet_a");
			$("#interface_pda").removeClass("interface_phone_a");$("#interface_pda").addClass("interface_phone");
			
			sh_interface=1;
			show_interface();
		});
		
		$("#interface_pda").click(function(){
			$('#more_desktop_text').text($(this).text());
			$("#login_interface").val("pda");
			if($("#filtered_query_string").val()){
				var fq = $("#filtered_query_string").val();
			}else{
				var fq = '';
			}
			$("#login_form").attr("action","pda/"+fq);
			
			$("#interface_pro").removeClass("interface_desktop_a");$("#interface_pro").addClass("interface_desktop");
			$("#interface_basic").removeClass("interface_tablet_a");$("#interface_basic").addClass("interface_tablet");
			$("#interface_pda").removeClass("interface_phone");$("#interface_pda").addClass("interface_phone_a");
			
			sh_interface=1;
			show_interface();
		});
		
		
		
		$("#interface_box").hide();
		$("#language_box").hide();
		
		$("#more_lang").click(function(){
			if(sh_interface==1){show_interface();}
			show_lang();
			return false;
		});
		
		$("#more_desktop").click(function(){
			if(sh_lang==1){show_lang();}
			show_interface();
			return false;
		});
		
		$(".more_top_close").click(function(){
			if(sh_lang==1) {show_lang();}
			else if(sh_interface==1){
				show_interface();
			}
		});
		
		$(".lng_i").click(function(){
			var lHref=(location.href+'?-').split('?');lHref=lHref[0];
			lHref = lHref.split('#');lHref=lHref[0];
			var add='';
			if(document.getElementById('login_login_remember') && document.getElementById('login_login_remember').checked) {add=add+'autoLogin=1&';}
			add=add+'language='+encodeURIComponent($(this).attr("title"))+'&';
			if(document.getElementById('login_interface')){add=add+'interface='+encodeURIComponent(document.getElementById('login_interface').value)+'&';}
			if(document.getElementById('login_login')){add=add+'username='+encodeURIComponent(document.getElementById('login_login').value);}
			location.href=lHref+'?'+add;
		});
		
		
		
		// banner
		$("#banner_mobile-and, #banner_mobile-ios, #banner_mobile-win,  #banner_desktop-win, #banner_desktop-osync, #banner_osx-calendar").click(function(){

			sh_bot=1;
			//$("#more_bot").css("border-top","1px solid #27769E");
			//$("#more_bot").css("border-bottom","1px solid #27769E");
			
			
			$("#more_bot").css("height","1900px");
			$("html,body").animate({ scrollTop: 0},0);
			//$("#more_bot").animate({height: 1200},{queue: false, duration: 600});
			setTimeout(function() {
				$("#more_bot").fadeIn('slow');
				$("html,body").animate({ scrollTop: $("#learn-more").offset().top+scroll_plus }, 800);
			}, 200);
				
			$("#more_bot_button").css( "background-position","-382px -12px");
			$("#sep1_hide").hide();
			


			
			if($(this).attr('id')=="banner_mobile-and"){menu_bot_id="help_phone"; menu_bot_sub="help_mobile_and";}
			else if($(this).attr('id')=="banner_mobile-ios"){menu_bot_id="help_phone"; menu_bot_sub="help_mobile_ios";}
			else if($(this).attr('id')=="banner_mobile-win"){menu_bot_id="help_phone"; menu_bot_sub="help_mobile_win";}
			else if($(this).attr('id')=="banner_osx-calendar"){menu_bot_id="help_osx"; menu_bot_sub="help_osx_calendar";}
			else if($(this).attr('id')=="banner_desktop-win"){menu_bot_id="help_desktop"; menu_bot_sub="help_desk_win";}
			else if($(this).attr('id')=="banner_desktop-osync"){menu_bot_id="help_desktop"; menu_bot_sub="help_desk_osx";}
			
			bot_menu(menu_bot_id);
			bot_submenu(menu_bot_sub);
			show_bot();
		});
		
		// bot more
		$("#more_bot_button, #more_bot_h3").click(function(){
			if(sh_bot==0) {
				//$("#more_bot").css("border-top","1px solid #27769E");
				//$("#more_bot").css("border-bottom","1px solid #27769E");
				
				//alert('s');
				
				$("#more_bot").css({height:"1900px"});
				$("html,body").animate({ scrollTop: 0},0);
				$("#more_bot").hide();
				
				var scrollHeight=$("#learn-more").offset().top+scroll_plus;
				
				//$("#more_bot").animate({height: 1200},{queue: false, duration: 600});
				setTimeout(function() { 
					$("#more_bot").fadeIn('slow');
					$("html,body").animate({ scrollTop: $("#learn-more").offset().top+scroll_plus }, 800);
				}, 200);
				
				$("#more_bot_button").css( "background-position","-382px -12px");
				
				
				
				
				sh_bot=1;
				$('#more_bot_h3').text($("#back_to_login_text").val());
				
			}
			else {
				$("html,body").animate({ scrollTop: 0 }, 800);
				
				$("#more_bot").fadeOut('slow',function(){
					
				});
				
				setTimeout(function() { 
					//$("#more_bot").css("height","0px");
				}, 1000);
				
				$("#more_bot_button").css( "background-position","-382px 0px");
				
				$("#more_bot").css("border-top","0px");
				$("#more_bot").css("border-bottom","0px");
			

				sh_bot=0;
				$('#more_bot_h3').text($("#learn_more_text").val());
				
			}
		
		});
		
		
		
		
		
		$("#"+menu_bot_id).addClass("active");
		$("#help_desk_win").addClass("active");
		$("#help_desk_win").css( "background-position","0px -244px");
		
		
		$("#more_bot_cont_platform_mobile").hide();
		$("#more_bot_cont_platform_osx").hide();
		
		/* HWN if help is not restricted */
		if(document.getElementById('more_bot'))
		{
			show_bot();
		}
		/* */
		
		
		$("#help_desktop, #help_tablet, #help_phone, #help_osx").click(function(){
			var p = $("#bot_menu_progress");
			if(p.val()!=1){
				menu_bot_id=$(this).attr('id');
				bot_menu(menu_bot_id);
			}
		});
		
		
		$("#help_desk_win, #help_desk_osx, #help_desk_2013, #help_mobile_and, #help_mobile_ios, #help_mobile_win,#help_osx_messages,#help_osx_contacts,#help_osx_calendar").click(function(){
			bot_submenu($(this).attr('id'));
		});
		
		
		$("#help_desktop, #help_tablet, #help_phone, #help_osx, #help_desk_win, #help_desk_osx,#help_osx_messages,#help_osx_contacts,#help_osx_calendar, #help_desk_2013, #help_mobile_and, #help_mobile_ios, #help_mobile_win").click(function(){
			menu_bot_sub=$(this).attr('id');
			show_bot();
		});
		
		
		
		

		$("#help_desktop, #help_tablet, #help_phone, #help_osx").hover(function(){
			
			//$("#more_bot_menu div").css( "color","#333333");
			$('#more_bot_menu .active').removeClass('active');
			
			$(this).addClass("active");
			
			if($(this).attr('id')=="help_desktop"){$("#more_bot_menu").css( "background-position","0px -401px");}
			else if ($(this).attr('id')=="help_osx"){$("#more_bot_menu").css( "background-position","-260px -401px");}
			else if ($(this).attr('id')=="help_tablet"){$("#more_bot_menu").css( "background-position","-520px -401px");}
			else if ($(this).attr('id')=="help_phone"){$("#more_bot_menu").css( "background-position","-780px -401px");}
			
			$(this).addClass("active");
			
		}, function(){
			$('#more_bot_menu .active').removeClass('active');
			//$("#more_bot_menu div").css( "color","#333333");
			
			//$("#"+menu_bot_id).css( "color","#FFFFFF");
			
			if($("#"+menu_bot_id).attr('id')=="help_desktop"){$("#more_bot_menu").css( "background-position","0px -401px");}
			else if ($("#"+menu_bot_id).attr('id')=="help_osx"){$("#more_bot_menu").css( "background-position","-260px -401px");}
			else if ($("#"+menu_bot_id).attr('id')=="help_tablet"){$("#more_bot_menu").css( "background-position","-520px -401px");}
			else if ($("#"+menu_bot_id).attr('id')=="help_phone"){$("#more_bot_menu").css( "background-position","-780px -401px");}
			
			$(("#"+menu_bot_id)).addClass("active");
			
		});
		
		
		
		
		
		
		
		$("#help_desk_win, #help_desk_osx, #help_desk_2013, #help_mobile_and, #help_mobile_ios, #help_mobile_win,#help_osx_messages,#help_osx_contacts,#help_osx_calendar").hover(function(){
			
			if($(this).attr('id')!=menu_bot_sub) {

				//$('#more_bot_menu .active').removeClass('active');
				//$(this).addClass("active");
				if($(this).attr('id')=="help_desk_win"){$("#help_desk_win").css( "background-position","0px -244px");}
				else if ($(this).attr('id')=="help_desk_osx"){$("#help_desk_osx").css( "background-position","0px -244px");}
				else if ($(this).attr('id')=="help_desk_2013"){$("#help_desk_2013").css( "background-position","0px -244px");}
				else if ($(this).attr('id')=="help_mobile_and"){$("#help_mobile_and").css( "background-position","-420px -244px");}
				else if ($(this).attr('id')=="help_mobile_ios"){$("#help_mobile_ios").css( "background-position","-560px -244px");}
				else if ($(this).attr('id')=="help_mobile_win"){$("#help_mobile_win").css( "background-position","-700px -244px");}
				else if ($(this).attr('id')=="help_osx_messages"){$("#help_osx_messages").css( "background-position","-210px -244px");}
				else if ($(this).attr('id')=="help_osx_contacts"){$("#help_osx_contacts").css( "background-position","-210px -244px");}
				else if ($(this).attr('id')=="help_osx_calendar"){$("#help_osx_calendar").css( "background-position","-210px -244px");}
				}
			
			
			
		}, function(){
			
			if($(this).attr('id')!=menu_bot_sub) {
				
				//$('#more_bot_menu .active').removeClass('active');
				//$(this).addClass("active");
				
				if($(this).attr('id')=="help_desk_win"){$("#help_desk_win").css( "background-position","0px -292px");}
				else if ($(this).attr('id')=="help_desk_osx"){$("#help_desk_osx").css( "background-position","0 -292px");}
				else if ($(this).attr('id')=="help_desk_2013"){$("#help_desk_2013").css( "background-position","0 -292px");}
				else if ($(this).attr('id')=="help_mobile_and"){$("#help_mobile_and").css( "background-position","-420px -292px");}
				else if ($(this).attr('id')=="help_mobile_ios"){$("#help_mobile_ios").css( "background-position","-560px -292px");}
				else if ($(this).attr('id')=="help_mobile_win"){$("#help_mobile_win").css( "background-position","-700px -292px");}
				else if ($(this).attr('id')=="help_osx_messages"){$("#help_osx_messages").css( "background-position","-210px -292px");}
				else if ($(this).attr('id')=="help_osx_contacts"){$("#help_osx_contacts").css( "background-position","-210px -292px");}
				else if ($(this).attr('id')=="help_osx_calendar"){$("#help_osx_calendar").css( "background-position","-210px -292px");}
				
			}
		});
		

		
		// forms
		
		// login 0
		// contact 400
		// register 800
		// pass 1200
		// reset 1600
	

		$(".link_login").click(function(){
			$("#main_form_slide").fadeOut(function(){$("#main_form_slide").css( "left","0px");});
			$("#main_form_slide").fadeIn(function(){focusFirstElement($("#main_form_login fieldset"));});
		});
		$(".link_contact").click(function(){
			$("#main_form_slide").fadeOut(function(){$("#main_form_slide").css( "left","-400px");});
			$("#main_form_slide").fadeIn(function(){focusFirstElement($("#main_form_contact fieldset"));});	
		});
		$(".link_register").click(function(){
			$("#main_form_slide").fadeOut(function(){$("#main_form_slide").css( "left","-800px");});
			$("#main_form_slide").fadeIn(function(){focusFirstElement($("#main_form_register fieldset"));});
		});
		$(".link_password").click(function(){
			$("#main_form_slide").fadeOut(function(){$("#main_form_slide").css( "left","-1200px");});
			$("#main_form_slide").fadeIn(function(){focusFirstElement($("#main_form_password fieldset"));});
		});
		
		$('fieldset').each(function(){
		 	var fieldset = this;
			$("input[type='text'],input[type='button'],input[type='submit'],a[href],button",this).last().blur(function(){
				if($(this).data('focused'))
				{
					focusFirstElement(fieldset);
				}
			}).click(function(){
				$(this).data('focused',false);
			}).focus(function(){
				$(this).data('focused',true);
			});
		});
		
		// msg
		$("#msg_ok_close").click(function(){
			$("#msg_ok").fadeOut();
		});
		$("#msg_x_close").click(function(){
			$("#msg_x").fadeOut();
		});
		
		
		// responsive height
		var diff=0, diff_mm=0, h_max=818, h_min=600, h_now=0;
		
		function height_resp(){
			
			h_now=$(window).height();
			
			diff_mm=h_max-h_min;
			diff=h_max-h_now;
			
			
			if(diff>diff_mm){diff=diff_mm;}
			if(h_now>h_max){diff=0;}
			
			$("#main").css( "height",(517-((diff)*0.25))+"px");
			$("#main").css( "padding-top",(57-((diff)*0.25))+"px");

			$("#foot_more").css( "margin-top",(48-((diff)*0.20))+"px");
			
			$("#head").css( "height",(114-((diff)*0.30))+"px");
			
			$("h1").css( "margin-top",(44-((diff)*0.18))+"px");
			$("#more_desktop, #more_lang").css( "margin-top",(50-((diff)*0.18))+"px");
			
			
		}
		
		
		
		//$("#main_scroll").css( "width",$(window).width()+"px");
		//$("#main_scroll").css( "height",$(window).height()+"px");
		
		height_resp();

	/*
		$("#main_size").resize(function() {

			//$("body").mCustomScrollbar("update");
			$("#main_scroll").css( "width",$(window).width()+"px");
			$("#main_scroll").css( "height",$(window).height()+"px");
			
			//$("#int_msg").html("#main_size: "+$("#main_size").height()+" #main_scroll:"+$("#main_scroll").height());
			
			$('#main_scroll').perfectScrollbar('update');
		});
		
		$(window).resize(function() {
			
			
			$("#main_scroll").css( "width",$(window).width()+"px");
			$("#main_scroll").css( "height",$(window).height()+"px");
			$('#main_scroll').perfectScrollbar('update');
			height_resp();
			
		});
		
		//$("#main_scroll").mCustomScrollbar();
		*/
		
	/** HWN */
	/* RSA login */
	function urlencode (str) {
		str = (str+'').toString()
		return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
	}
	function getData(url) {
		if (window.XMLHttpRequest) {AJAX=new XMLHttpRequest();}
		else {AJAX=new ActiveXObject("Microsoft.XMLHTTP");}
		if (AJAX) {
			AJAX.open("GET", url, false);
			AJAX.send(null);
			return AJAX.responseText;
		} else {return false;}
	}
	function encodePwd(sKey,form,from,to)
	{
		var to_set=true;
		if(!from){var from='login_pass';}
		if(!to){var to='password_rsa'; to_set=false;}
		
		if(document.getElementById(from))
		{
			var dPwd = document.getElementById(from);
			var sPwd = dPwd.value;
			
			var time=Math.floor(new Date().getTime()/1000);
			if (document.getElementById('time'))
			{
				var newTime=getData('server/login/shortcuts.php?t&'+time);
				if(newTime){time=newTime;}
				else{time=document.getElementById('time').value;}
			}
			var rPwd=document.getElementById(from).value='p='+urlencode(document.getElementById(from).value)+'&t='+time;
			
			//Prepare RSA library
			var rsa = new RSAKey();
			rsa.setPublic(sKey, '10001');
			if(!document.getElementById(to))
			{
				var password_rsa = document.createElement('input');
				password_rsa.type = 'hidden';
				password_rsa.name = to;
				password_rsa.value = rsa.encrypt(rPwd);
				form.appendChild(password_rsa);
				dPwd.value = '';
			}
			else
			{
				document.getElementById(from).value = '';
				document.getElementById(to).value = rsa.encrypt(rPwd);
			}
		}
		return true;
	}
	
	$('#login_form').submit(function(){
		encodePwd($(this).attr('name'),this);
	});
	
	$('#forgot_password_form').submit(function(){
		encodePwd($(this).attr('name'),this,'change_pass_old');
		encodePwd($(this).attr('name'),this,'change_pass_new','change_pass_new');
		encodePwd($(this).attr('name'),this,'change_pass_check_real','change_pass_check_real');
	});
	
	$('#reset_form').submit(function(){
		encodePwd($(this).attr('name'),this,'reset_pass_real');
		encodePwd($(this).attr('name'),this,'reset_pass_check_real','reset_pass_check_real');
	});
	
	/**/
	
	/* let user delete it's username from cookies */
	if(document.getElementById('usernameDelete'))
	{
		document.getElementById('usernameDelete').onclick=function()
		{
			document.getElementById('saveFrame').src="server/login/shortcuts.php?d&"+Math.floor(new Date().getTime()/1000);
			document.getElementById('login_login').value="";
			this.style.display="none";
			$("#login_pass").val("");
			document.getElementById('login_login').focus();
			return false;
		}
	}
	/**/
	
	/** */
	
	$('#js_check').val('1');
	$('#login_pass').focus(function(){
		$('#usernameDelete').data('goto','login_login');
	});
	$('#login_login').focus(function(){
		$('#usernameDelete').data('goto','login_pass');
	});
	
	$('#usernameDelete').focus(function(){
		var go='login_pass';
		if($('#usernameDelete').data('goto')){go=$('#usernameDelete').data('goto');}
		$('#'+go).focus();
	});
	if($('#login_login').val()!='')
	{
		$('#login_pass').focus();
	}
	else
	{
		$('#login_login').focus();
	}
	/** */
	
	/** */
});