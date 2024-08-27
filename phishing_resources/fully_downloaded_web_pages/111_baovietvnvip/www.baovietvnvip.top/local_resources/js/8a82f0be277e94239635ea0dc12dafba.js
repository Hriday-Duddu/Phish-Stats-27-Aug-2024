function getYuegong (str){
	// 重新获取money存储设置其他值
	var money = parseInt(str);
	var benjin=0;
	xianshi();
}
function xianshi () {
    $.each($(".timeBtn"), function(index, val) {
    	var spanval = $("#timeSpanVal_"+index).html();
    	if(spanval == definamonth){
    		$('#'+index+'m').addClass('act').siblings('.timeBtn').removeClass('act');
    	}
    });
}
function changeslider(isPlus) {
      
    if (isPlus) {
        //加
        
        scale = parseInt($('.jslider-pointer-to').css('left')) + STEP;
        scale = (scale >= 20000000) ? '1000' : parseInt(scale);
        scale= scale+'%';
        $('.jslider div:nth-child(3)').css('left', scale);
        $('#tap1 i:nth-child(3)').css('width', scale);
        SliderSingle1.slider('value', MINMONEY, (parseInt(nowmoney.money) + 10000000))
        // if(String(parseInt(nowmoney.money)).length==10){
        //     // nowmoney.money = parseInt(nowmoney.money) + 10000000;
        //     $('.money_str').html(parseInt(nowmoney.money) + 10000000);
        // 	SliderSingle1.slider('value', MINMONEY, (parseInt(nowmoney.money) + 10000000))
        // }else{
        //     $('.money_str').html(parseInt(nowmoney.money) + 10000000);
        // 	SliderSingle1.slider('value', MINMONEY, (parseInt(nowmoney.money) + 10000000))
        //     // nowmoney.money = parseInt(nowmoney.money)+ 10000000;
            
        // }
        
        reset();
    } else {
        //减
        scale = parseInt($('.jslider-pointer-to').css('left')) - STEP;
        scale = (scale <= 0) ? '0' : parseInt(scale);
        scale= scale+'%'
        $('.jslider div:nth-child(3)').css('left', scale);
        $('#tap1 i:nth-child(3)').css('width', scale);
        if(String(parseInt(nowmoney.money)).length==10){
            $('.money_str').html(parseInt(nowmoney.money) - 10000000);
        	SliderSingle1.slider('value', MINMONEY, (parseInt(nowmoney.money) - 10400000))
        }else{
            $('.money_str').html(parseInt(nowmoney.money) - 10000000);
        	SliderSingle1.slider('value', MINMONEY, (parseInt(nowmoney.money) - 10400000))
        }
        reset()
        
        console.log(scale);
    }
}
function reset() {
	var money = $('.money_str').html();
	money = new Number(money).toFixed(0);
	var month = parseInt($('.timeBtn.act span').html());
  	var lixi = parseInt($('.lixi_bt.act span').html());
	var fuwufei = money * feilv[month - 1] / 100;
	var yuexi =(money * 0.9) /100;
	fuwufei = fuwufei.toFixed(2);
	$('#fuwufei').html(fuwufei);
	var tmpval = feilv[month - 1] / 30;
	tmpval = new Number(tmpval).toFixed(2);
	
	
	$("#rixi").html(tmpval);
	$('.money_yue').html();
	//console.log(fuwufei);
	var jixi=fuwufei * 3;
	 jixi=jixi.toFixed(2);
	 // 总利息
	$("#jixi").html((yuexi).toFixed(0));
	// 每月还款额
	$('.money_yue').html((money/month + yuexi).toFixed(0));
	var nixi=fuwufei * 12;
	 nixi=nixi.toFixed(2);
	
	$("#nixi").html('<span style="display:none">2</span>年息：'+nixi);
	
	var benjin = money / month;
	benjin = benjin.toFixed(2);
	$('#benjin').html('¥' + benjin);
	var yuegong = new Number(benjin) + new Number(fuwufei);
	yuegong = yuegong.toFixed(2);
	$('#yuegong').html(yuegong);
    $('#total').html('¥' + yuegong);
    nowmoney['money'] = money;
    $("#order_money").val(money);
    nowmoney['month'] = month;
    $("#order_month").val(month);
  	nowmoney['lixi'] = lixi;
    $("#order_lixi").val(lixi);
    nowmoney['fuwufei'] = fuwufei;
    nowmoney['benjin'] = benjin;
    nowmoney['yuegong'] = yuegong;
    nowmoney['total'] = parseFloat(benjin) + parseFloat(fuwufei);
}
$(function () {
        SliderSingle1.slider({
            from: MINMONEY,
            to: MAXMONEY,
            step: 10000000,
            round: 0,
            dimension: '',
            skin: "round",
            onstatechange: function (a) {
                // console.log(a);
                var t = a.split(';');
                console.log(t);
                // t[1] = parseInt(t[1]).toFixed(2);
                t[1] = parseInt(t[1]).toFixed(0);
                // if (parseInt(t[1]) > 40000000) {
                //     $('.money_str').html(parseInt(t[1]) + (400000*num));
                // }else{
                //     $('.money_str').html(parseInt(t[1]));
                // }
                // if ($('.money_str').html() == "") {
                //     $('.money_str').html(parseInt(t[1]));
                // }
                $('.money_str').html(parseInt(t[1]));
                getYuegong(t[1]);
                reset();
            },
            callback: function (a) {
                if (num % 2 == 0) {
                    $(".jslider-pointer").css({
                        animation: 'myfirst .5s',
                        '-webkit-animation': 'myfirst .5s'
                    });
                } else {
                    $(".jslider-pointer").css({
                        animation: 'mysecond .5s',
                        '-webkit-animation': 'mysecond .5s'
                    })
                }
                num++
            }
        });
        var flag = null;
        //减按钮
        $('#subtract').click(function () {
            // console.log("subtract");
            if (!flag) {
                if (parseInt(nowmoney.money) > MINMONEY) {
                    changeslider();
                } else {
                    $(".subtractmore").fadeIn('slow')
                    flag = setTimeout(showTime, 2000);
                    function showTime() {
                        $(".subtractmore").fadeOut('slow')
                        flag = null;
                    }
                }
            }
        });
        //加按钮
        $('#plus').click(function () {
            if (!flag) {
                if (parseInt(nowmoney.money) < MAXMONEY) {
                    changeslider(true);
                } else {
                    $(".plusmore").fadeIn('slow')
                    flag = setTimeout(showTime, 2000);
                    function showTime() {
                        $(".plusmore").fadeOut('slow')
                        flag = null;
                    }
                }
            }

        });
        //随机生成 jslider-pointer 样式
        function pointer() {
            var random = Math.ceil(Math.random() * 3);
            switch (random) {
                case 1:
                    $(".jslider-pointer").css('background-image', "url(/Public/home/imgs/coin.png)");
                    break;
                case 2:
                    $(".jslider-pointer").css('background-image', "url(/Public/home/imgs/pig.png)");
                    break;
            }
        }
        pointer();
        //借款期限
        $('.timeBtn').click(function () {
            $(this).addClass('act').siblings('.timeBtn').removeClass('act');
            reset()
            return false
        });
		
         $('.lixi_bt').click(function () {
            $(this).addClass('act').siblings('.lixi_bt').removeClass('act');
           reset()
            return false
        });

    	middle33();
	    function middle33(){
	        var h = $('#deowin33').height();
	        var t = -h/2 + "px";
	        $('#deowin33').css('marginTop',t);
	    }
    	$('#winbtn4').click(function(){
        	$('#deowin4').hide();
        	$('#mask3').hide();
        	$('#deowin4 iframe').attr('src',''); 
      	});
    	middle1();
    	function middle1(){
        	var h = $('#deowin4').height();
        	var t = -h/2 + "px";
        	$('#deowin4').css('marginTop',t);
    	}
    	$('#winbtn5').click(function(){
        	$('#deowin5').hide();
        	$('#mask3').hide();
        	$('#deowin5 iframe').attr('src',''); 
    	});
    	middle2();
    	function middle2(){
        	var h = $('#deowin5').height();
        	var t = -h/2 + "px";
        	$('#deowin5').css('marginTop',t);
    	}
    	//提示关闭
        $("#winbtn3").click(function() {
            $('#deowin31').hide();
            $('#mask3').hide();
        });
        middle();
        function middle() {
            var w = $('#deowin3').width();
            var h = w / 0.64;
            $('.deocon11').css('height', h);
            var t = -h / 2 + "px";
            $('#deowin3').css('marginTop', t);
        }
});