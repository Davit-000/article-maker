function deleteElement(array, value) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if(array[i] !== value) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

var intarea = 8;
var midarea = 5;
var sumarea = 12;

var total = intarea + midarea + sumarea;
var num = 18;

var areaObj = {
    intarea : 8,
    midarea : 5,
    sumarea : 12
};

function objMin(obj) {
    var min = Infinity, minKey = '';
    if(Object.keys(obj).length > 1) {
        Object.keys(obj).map(function(key, value) {
            var value = areaObj[key];        
            if(value < min) {
                min = value;
                minKey = key;
            }
        });
    } else {        
        minKey = Object.keys(obj)[0];
    }
    
    return minKey;
}

function arrayMin(arr) {
  var len = arr.length, min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
};

if (num <= total)  {
    if(num % 3 === 0) {
        var num1 = num / 3,
            num2 = num1,
            num3 = num1;
    } else {
        var num1 = Math.floor(num / 3),
            num2 = num1,
            num3 = num1 + (num % 3);
    }

    var min = Math.min(num1, num2, num3),
        areaMin = Math.min(intarea, midarea,sumarea);

    if(min > areaMin) {
        num1 = areaMin;

        if((num - num1) % 2 === 0) {
            num2 = (num - num1) / 2;
            num3 = num2;
        } else {
            num2 = Math.floor((num - num1) / 2);
            num3 = num2 + (num - num1) % 2;
        }
        var areaArr = [intarea, midarea, sumarea];
        areaArr = deleteElement(areaArr, areaMin);
        console.log(areaArr);
        if(Math.min(num2, num3) > Math.min(areaArr[0], areaArr[1])) {
            num2 = Math.min(areaArr[0], areaArr[1]);
            num3 = num - num1 - num2;
        }
    }
    var result = [num1, num2, num3];
} else {
    throw 'Num bigest then Total';
}

console.log(result);
var needObj = {};
for(var i = 0; i < 3; i++) {
    var min = objMin(areaObj);
    if(min === 'intarea') {
        needObj.int = arrayMin(result);
        delete areaObj.intarea;
    } else if(min === 'midarea') {
        needObj.mid = arrayMin(result);
        delete areaObj.midarea;
    } else if(min === 'sumarea') {
        needObj.sum = arrayMin(result);
        delete areaObj.sumarea;
    }
}

console.log(needObj);
var test = {test:1};
console.log(Object.keys(test));

function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

var arr = [2,34,5,67,88,9,90,32,4345];

console.log(mergeSort(arr));
