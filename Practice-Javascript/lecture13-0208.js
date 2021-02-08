var cond = false;

while(cond) {
    console.log("이 구문은 실행되지 않습니다.");
}

do {
    console.log("이 구문은 한번은 실행됩니다.");
} while(cond);

do {
    var ans = parseInt( prompt("1+1=?"));
} while(ans != 2);

console.log("맞췄습니다.");

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var i = 0;

while(i < array.length) {
    console.log(array[i]);

    i++;
}

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

var obj = {
    name: "object",
    weight: 30,
    isObject: true,
    arr: [1, 2, 3],
    obj: {property: 1}
};

console.log("For 구문으로 object property 반복하기");

var property_list = Object.keys(obj);
console.log("Property List : ", property_list);

for(var i=0; i<property_list.length; i++) {
    var propertyName = property_list[i];
    console.log("\t", propertyName, ": ", obj[propertyName]);
}

console.log("\n\n For in 구문으로 object property 반복하기");

for (var propertyName in obj) {
    console.log("\t", propertyName, ": ", obj[propertyName]);
}