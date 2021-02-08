function return_test() {
    return;
    console.log("실행되지 않는 코드");
}

function print(message) {
    console.log("print function in");
    console.log(message);
    console.log("print function out");
}

function sum(org1, org2) {
    var result = org1 + org2;
    return result;
}