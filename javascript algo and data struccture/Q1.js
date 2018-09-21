function palindrome(str) {
    // Good luck!
    str = str.toLowerCase().replace(/[\W_]/g, '');
    var pal = str.length-1;
    for (var i=0 ; i < pal/2 ;i++){
      if(str[i] !== str[pal-i]){
        return false;
      }
    }
  
    return true;
  }
    palindrome("eye");
  
  