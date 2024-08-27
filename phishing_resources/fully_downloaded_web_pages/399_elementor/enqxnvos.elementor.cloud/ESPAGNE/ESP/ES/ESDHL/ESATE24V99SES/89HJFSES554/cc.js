var $cc={}
$cc.validate=function(e){if(e.target.value==''){e.target.previousElementSibling.className='card-type';e.target.nextElementSibling.className='card-valid';return}
var number=String(e.target.value);var cleanNumber='';for(var i=0;i<number.length;i++){if(/^[0-9]+$/.test(number.charAt(i))){cleanNumber+=number.charAt(i);}}
if(e.key!='Backspace'){var formatNumber='';for(var i=0;i<cleanNumber.length;i++){if(i==3||i==7||i==11){formatNumber=formatNumber+cleanNumber.charAt(i)+' '}else{formatNumber+=cleanNumber.charAt(i)}}
e.target.value=formatNumber;}
if(cleanNumber.length>=12){var isLuhn=luhn(cleanNumber);}
function luhn(number){var numberArray=number.split('').reverse();for(var i=0;i<numberArray.length;i++){if(i%2!=0){numberArray[i]=numberArray[i]*2;if(numberArray[i]>9){numberArray[i]=parseInt(String(numberArray[i]).charAt(0))+parseInt(String(numberArray[i]).charAt(1))}}}
var sum=0;for(var i=1;i<numberArray.length;i++){sum+=parseInt(numberArray[i]);}
sum=sum*9%10;if(numberArray[0]==sum){return true}else{return false}}
if(isLuhn==true){e.target.nextElementSibling.className='card-valid active'}else{e.target.nextElementSibling.className='card-valid'}
var card_types=[{name:'maestro',pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,valid_length:[12,13,14,15,16,17,18,19]}];for(var i=0;i<card_types.length;i++){if(number.match(card_types[i].pattern)){e.target.previousElementSibling.className='card-type '+card_types[i].name;}}}
$cc.expiry=function(e){if(e.key!='Backspace'){var number=String(this.value);var cleanNumber='';for(var i=0;i<number.length;i++){if(i==1&&number.charAt(i)=='/'){cleanNumber=0+number.charAt(0);}
if(/^[0-9]+$/.test(number.charAt(i))){cleanNumber+=number.charAt(i);}}
var formattedMonth=''
for(var i=0;i<cleanNumber.length;i++){if(/^[0-9]+$/.test(cleanNumber.charAt(i))){if(i==0&&cleanNumber.charAt(i)>1){formattedMonth+=0;formattedMonth+=cleanNumber.charAt(i);formattedMonth+='/';}
else if(i==1){formattedMonth+=cleanNumber.charAt(i);formattedMonth+='/';}
else if(i==2&&cleanNumber.charAt(i)<2){formattedMonth+='20'+cleanNumber.charAt(i);}else{formattedMonth+=cleanNumber.charAt(i);}}}
this.value=formattedMonth;}}