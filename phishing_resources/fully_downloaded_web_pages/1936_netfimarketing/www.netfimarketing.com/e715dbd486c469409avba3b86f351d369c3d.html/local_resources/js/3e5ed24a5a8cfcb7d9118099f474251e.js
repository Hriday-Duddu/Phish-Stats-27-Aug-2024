if(!Object.keys){Object.keys=(function(){'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty,hasDontEnumBug=!({toString:null}).propertyIsEnumerable('toString'),dontEnums=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor'],dontEnumsLength=dontEnums.length;return function(obj){if(typeof obj!=='object'&&(typeof obj!=='function'||obj===null)){throw new TypeError('Object.keys called on non-object');}
var result=[],prop,i;for(prop in obj){if(hasOwnProperty.call(obj,prop)){result.push(prop);}}
if(hasDontEnumBug){for(i=0;i<dontEnumsLength;i++){if(hasOwnProperty.call(obj,dontEnums[i])){result.push(dontEnums[i]);}}}
return result;};}());}
(function(){"use strict";var ratings_Is_path_to_cover='#the-star-field .the-star';var ratings_Is_numbering_elem_path='#the-last-star-standing-panel #the-on-text';var submit_like_button_selection_string='a#submit-like-button';var PageStats=function(){var startTime=undefined,rnd=null,hasVideo=false,videoType=undefined,videoPlayCount=0,videoTotalSeconds=0,hasRank=false,rank=0,changedInputs={},i;if(window.crypto&&window.Uint8Array&&window.btoa){var myarray=new Uint8Array(15);window.crypto.getRandomValues(myarray);rnd='';for(i=0;i<myarray.length;i++){rnd+=String.fromCharCode(myarray[i]);}
rnd=btoa(rnd);}else{rnd='';for(i=0;i<8;i++){rnd+=Number(Math.floor(Math.random()*(1<<16))).toString(16);}}
var init=function(setVideoType){var self=this;startTime=new Date().getTime();$.ajax({type:'POST',contentType:'json',data:JSON.stringify({type:1,startTime:startTime,rnd:rnd})});videoType=identifyVideo(setVideoType);setupRank();startListeners();};var identifyVideo=function(setVideoType){if(setVideoType!=undefined){return setVideoType;}
if(window.wistiaEmbed!==undefined){hasVideo=true;return 'wistia';}};var incPlayCount=function(){videoPlayCount=videoPlayCount+1;};var incTotalSeconds=function(){videoTotalSeconds=videoTotalSeconds+1;};var startListeners=function(){$("input").change(function(){var input_name=$(this)[0].name;changedInputs[input_name]=true;console.log(Object.keys(changedInputs).toString());});$(window).on('beforeunload',function(){sendStats();return;});var iOS=/iPad|iPhone|iPod/.test(navigator.userAgent);if(iOS){$(window).on('pagehide',function(){sendStats();return;});}
if(typeof videoType==="undefined"){return;}
var wb;switch(videoType){case 'wistia':wb=window.wistiaEmbed;wb.bind('play',function(e){var currentTime=wb.time();if(currentTime<1){incPlayCount();}});wb.bind('secondchange',function(e){incTotalSeconds();});break;}};var setupRank=function(){if($(ratings_Is_path_to_cover).length>0){hasRank=true;}
$(ratings_Is_path_to_cover).on('click',function(){var this_elem_positioning=$(this).index();$(ratings_Is_numbering_elem_path).html((this_elem_positioning+1).toFixed(1));$(ratings_Is_path_to_cover).removeClass('selected');for(var i=0;i<=this_elem_positioning;i++){$(ratings_Is_path_to_cover).eq(i).addClass('selected');}
rank=(this_elem_positioning+1);});$(ratings_Is_path_to_cover).on('hover',function(){var this_elem_positioning=$(this).index()
for(var i=0;i<=this_elem_positioning;i++){$(ratings_Is_path_to_cover).eq(i).addClass('selected');}});$(ratings_Is_path_to_cover).on('blur',function(){var this_elem_positioning=$(this).index()
for(var i=0;i<=this_elem_positioning;i++){$(ratings_Is_path_to_cover).eq(i).removeClass('selected');}});};var sendStats=function(){var dataToSubmit={type:2,rnd:rnd,startTime:startTime,sendTime:new Date().getTime(),};if(hasRank){dataToSubmit.rank=rank;}
if(hasVideo){dataToSubmit.videoPlayCount=videoPlayCount;dataToSubmit.videoTotalSeconds=videoTotalSeconds;}
dataToSubmit.changedInputs=Object.keys(changedInputs).toString();var jsonString=JSON.stringify(dataToSubmit);$.ajax({type:'POST',contentType:'json',data:jsonString,async:false,success:function(data,status,jqXHR){},error:function(jqXHR,status,error){}});};return{init:init,sendStats:sendStats}}();var windowLoad=window.onload||function(){PageStats.init();};window.onload=function(){windowLoad();}})();