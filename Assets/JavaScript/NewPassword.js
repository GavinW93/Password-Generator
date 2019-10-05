var char = 'abcdefghijklmnopqrstuvwxyz';
var capschar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';
var minlen=8;
var maxlen= 128;
//var value= 40;
var mainValue= Math.floor((Math.random() * 128) + 8);

var charNum = document.getElementById("charNum");
//var numBox = document.getElementById("num");
//var symBox = document.getElementById("sym");
var submit = document.getElementById("generate");
var yourPw = document.getElementById("password");




submit.addEventListener("click",function(e){
  var characters = char+capschar+num+sym;
 characters += num;
 characters += sym;
  yourPw.value = password(charNum.value, characters);
});


function password(l,characters){
		var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}

function copyFunction() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}