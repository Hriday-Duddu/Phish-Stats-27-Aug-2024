
//格式化日期
Date.prototype.format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[
                k]).length)));
    return fmt;
}
//字符串替换
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

//获取url参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

window.channel = getUrlParam("channel") || "";
if (window.channel && window.sessionStorage) {
    sessionStorage.setItem("channel", window.channel);
}
// 滚动插件
window.renderOwl = function (selector, config) {
    var owl = $(selector);
    // 滚动插件
    if (owl.children().length <= 0) {
        return;
    }
    owl.addClass('owl-carousel').owlCarousel(config);
    return owl;
}
function toDecimalNumber(v) {
    var c = 0;
    v = "" + v;
    var ret = "";
    for (var i = 0; i < v.length; i++) {
        c += 1;
        var ch = v[v.length - 1 - i];
        ret = ch + ret;
        if (c % 3 == 0) {
            ret = "," + ret;
        }
    }
    if (ret[0] == ",") {
        ret = ret.substr(1);
    }
    return ret;
}

window.numbers = {};
window.numberTimes = {};
setInterval(function () {
    //动态为所有的jackpot数字递增
    if (!window.$) {
        return;
    }
    var t = parseInt(new Date().getTime() / 1000);
    $(".jackpot").each(function () {
        var key = $(this).attr("data-key");
        var v = $(this).html();
        var factor = 1;
        if (key) {
            if (window.numbers[key]) {
                v = window.numbers[key];
                var tLast = window.numberTimes[key];
                if (tLast) {
                    if (t - tLast > 1) {
                        factor = t - tLast;
                        if (factor > 60) {
                            factor = 60;
                        }
                    }
                }
            }
        }
        if (!v) {
            return;
        }
        v = v.replaceAll(",", "");
        v = parseFloat(v);
        v += (Math.random() * 5 + 1) * factor;
        v = v.toFixed(0);
        var ret = toDecimalNumber(v);
        if (key) {
            window.numbers[key] = ret;
            window.numberTimes[key] = t;
        }
        $(this).html(ret);
    });
}, 800);
