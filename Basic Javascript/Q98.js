function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
        for (var x = 0; x < arr[i].length; x++) {
            product *= arr[i][x];
        }
    }

    // Only change code above this line
    return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
