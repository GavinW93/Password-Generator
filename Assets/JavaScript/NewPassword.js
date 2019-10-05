var char = 'abcdefghijklmnopqrstuvwxyz';
var capschar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';
var minlen=8;
var maxlen= 128;
//var value= 40;
var mainValue= Math.floor((Math.random() * 128) + 8);
var nothing=0;

var charNum = document.getElementById("charNum");
//var numBox = false;
//var symBox = false;
//var LBox = false;
//var UBox = false;
var submit = document.getElementById("generate");
var yourPw = document.getElementById("password");
//var charNum= 0;


//begin the action
submit.addEventListener("click",function(e){
  var characters = "";
 
  yourPw.value = password(charNum.value, characters);
});
// prompts requirements
function password(l,characters){

if (confirm("Add Lowercase?")) {
    
    characters += char;
}
else
{
nothing+=1;
}
if (confirm("Add Uppercase?")) {
   
    characters += capschar;
}
else
{
nothing+=1;
}
if (confirm("Add Numbers?")) {
   
    characters += num;
}
else
{
nothing+=1;
}
if (confirm("Add Symbols?")) {
   
    characters += sym;
}else
{
nothing+=1;
}
if(nothing >= 3){
  alert("error please add a type");
nothing =0;
}
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