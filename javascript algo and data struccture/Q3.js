function rot13(str) {
    var Array = [];
    var regEx = /[A-Z]/ ;
    str = str.split("");
    for (var x in str) {
      if (regEx.test(str[x])) {
        Array.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
      } else {
        Array.push(str[x].charCodeAt());
      }
    }
    str = String.fromCharCode.apply(String, Array);
    return str;
  }

  // Change the inputs below to test
  rot13("LBH QVQ VG!");