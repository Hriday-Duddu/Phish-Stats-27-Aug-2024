(function(h){function e(c,b,a){return c<b?(a=b-c,Math.log(b)/Math.log(a)*100):c>a?(b=c-a,Math.log(100-a)/Math.log(b)*100):0}function k(c){for(var b={},a="",d=0;d<c.length;++d)c[d]in b||(b[c[d]]=1,a+=c[d]);return a}h.detect=function(c){if(0===c.length||!c.trim())return 0;for(var b=c,a=[];a.length<b.length/35;)a.push(b.substring(0,35)),b=b.substring(36);1<=a.length&&10>a[a.length-1].length&&(a[a.length-2]+=a[a.length-1],a.pop());for(var b=[],d=0;d<a.length;d++)b.push(k(a[d]).length);a=100*b;for(d=b=
0;d<a.length;d++)b+=parseFloat(a[d],10);a=b/a.length;for(var f=d=b=0;f<c.length;f++){var g=c.charAt(f);g.match(/^[a-zA-Z]+$/)&&(g.match(/^(a|e|i|o|u)$/i)&&b++,d++)}b=0!==d?b/d*100:0;c=c.split(/[\W_]/).length/c.length*100;a=Math.max(1,e(a,45,50));b=Math.max(1,e(b,35,45));c=Math.max(1,e(c,15,20));return Math.max(1,(Math.log10(a)+Math.log10(b)+Math.log10(c))/6*100)}})("undefined"===typeof exports?this.gibberish={}:exports);