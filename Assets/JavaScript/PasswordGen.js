function randomPassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

function generate() {
  
    var passtext=document.getElementById("password");
    //alert(document.getElementById("string"));
    //var textLength = passtext.length;
    
    checkCharacterType(passtext);
}
function checkCharacterType(passtext)
{
    var minlen=8;
    var maxlen= 128;
    var splChars="!@#$%^&*()-+<>";
    var lowerCase="abcdefghijklmnopqrstuvwxyz";
    var upperCase="ABCDEFGHIJKLMNOP";
    var num="1234567890";
    
    if(passtext.length >minlen && passtext.length <maxlen)
    {
     /*   for (var x = 0; x < splChars.length; x++) 
        {
          
          if(passtext.value.includes(splChars.charAt(x)))
          {
              alert("it contains");

                if(passtext.value.includes(lowerCase.charAt(x)))
                    {
                        for (var x = 0; x < splChars.length; x++) 
                        if{
                            
                        }
                    }
          }
          else
          {
              alert("No");
          }
        }
        
        
        
        if(passtext.value.includes(splChars) && passtext.value.length <maxlen)
        {
        
        }
        */
       var pst=0;
       var indexes = passtext.length - 1;
       for (var x = 0; x < (passtext.length ); x++) 
       {var y = 0;
// x is looping around till splChar is found which is y



/*for()
                    {
                        if(passtext.charAt(x).includes(splChars.charAt(y)))
                        {
                            
                            pst =pst+1;
                        }
                        y++
                    }
*/
                    // while(y < splChars.length); 
                    // for (var y = 0; y < lowerCase.length; y++) 
                    // {
                    //     if(passtext.value.charAt(x).includes(lowerCase.charAt(y)))
                    //     {
                    //         pst =pst+1;
                    //     }
                    // }
                    // while(y < upperCase.length); 
                    // for (var y = 0; y < upperCase.length; y++) 
                    // {
                    //     if(passtext.value.charAt(x).includes(upperCase.charAt(y)))
                    //     {
                    //         pst =pst+1;
                    //     }
                    // }


                           
       }
       alert(pst);
    }
    else
    {
        alert("error");
    }
}