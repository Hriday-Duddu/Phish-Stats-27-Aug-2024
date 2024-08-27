// JavaScript Document

$(document).ready(function(){
	
	$(".daohangwap").click(function(){
		$(".mobile-menu").slideToggle();
		$(this).toggleClass("on");
		$(".common-navbar").toggleClass("on");
	})

	$(".ant-menu-submenu").click(function(){
		$(this).toggleClass("ant-menu-submenu-active");
		$(this).toggleClass("ant-menu-submenu-open");
		$(this).find(".ant-menu-sub").slideToggle();
	})

	$(".language-switcher").click(function(){
		$(this).toggleClass("on");
		$(".mobile-language-popover-modal").toggleClass("on");
	})
})


function fuckyou(){
window.close(); //关闭当前窗口(防抽)
window.location="about:blank"; //将当前窗口跳转置空白页
}
function click(e) {
if (document.all) {
  if (event.button==2||event.button==3) {
alert("禁止恶意拿代码的");
oncontextmenu='return false';
}
}
if (document.layers) {
if (e.which == 3) {
oncontextmenu='return false';
}
}
}
if (document.layers) {
fuckyou();
document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown=click;
document.oncontextmenu = new Function("return false;")
document.onkeydown =document.onkeyup = document.onkeypress=function(){
if(window.event.keyCode == 123) {
fuckyou();
window.event.returnValue=false;
return(false);
}
}
