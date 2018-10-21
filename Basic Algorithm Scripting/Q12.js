function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
   var num = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      num.splice(n, 0, arr1[i]);
      n++;
  }
  return num
  }
  frankenSplice([1, 2, 3], [4, 5, 6], 1);