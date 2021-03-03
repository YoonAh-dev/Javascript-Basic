// function a() {
//     console.log('A');
// }

var a = function() {
    console.log('B');
}

function slowfunc(callback) {
    callback();
}

slowfunc(a);

// 패키지(독립적으로 실행되는 프로그램, 소프트웨어) 매니저
// : 소프트웨어들을 관리해주는(생성, 설치, 업데이트, 삭제) 프로그램
// - 각각 언어, 운영체제별로 중요

// NPM : nodejs에서 광범위하게 사용됨(nodejs 설치될때 이미 설치됨)
