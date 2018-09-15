function filteredArray(arr, elem) {
    let newArr = [...arr];
     // change code below this line
    for(let i = 0; i < newArr.length; i++) {
      for(let j = 0; j < newArr[i].length; j++) {
        if(newArr[i][j] == elem) {
          newArr.splice(i,1);
          i--;
          break;
        }
      }
    }
     // change code above this line
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));