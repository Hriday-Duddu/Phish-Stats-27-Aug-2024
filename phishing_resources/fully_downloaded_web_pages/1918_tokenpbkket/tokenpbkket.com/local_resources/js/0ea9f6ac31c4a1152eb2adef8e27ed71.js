// 下载地址
var down_link='https://ossms3.com/download.aspx?app=tp-pz';


$(".download_ios").attr('href',down_link)
$(".download_google").attr('href',down_link)
$(".download_android").attr('href',down_link)


var base64_img = jrQrcode.getQrBase64(down_link);
$('#qr-code').attr('src',base64_img );
[*AT*]4B901CBECB6E4EECB6EBF016E027F9D5