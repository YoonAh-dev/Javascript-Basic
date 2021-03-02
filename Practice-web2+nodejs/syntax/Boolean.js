console.log(1+1 !== 2);

var i = 0;
while(i < 5){
    i++;
    console.log('123');
    console.log('456');
}

var arr = ['a', 'b', 'c', 'd'];

console.log(arr);

arr[2] = 3;

console.log(arr[2]);
console.log(arr.length);

arr.push('n');

console.log(arr);

var arr2 = [1, 500, 3, 24, 56, 77, 13, 89];
var total = 0;

i=0;
while(i < arr2.length) {
    console.log(arr2[i]);
    total += arr2[i];
    i++;
}

console.log("total " + total);