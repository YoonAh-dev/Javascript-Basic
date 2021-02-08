console.log("Menu");
console.log("1. Ice Americano");
console.log("2. Cafe Latte");
console.log("3. Cappuccino");
console.log("4. Tea");



// if (choice == 1) {
//     console.log("아이스 아메리카노는 1500원 입니다.");
    
// } else if (choice == 2) {
//     console.log("카페 라떼는 1800원 입니다.");
// } else if (choice == 3) {
//     console.log("카푸치노는 2000원 입니다.");
// } else if (choice == 4) {
//     console.log("홍차는 1300원 입니다.");
// } else {
//     console.log("죄송합니다. 그런 메뉴는 존재하지 않습니다.");
// }

while(true) {
    var choice = parseInt(prompt("메뉴를 선택해주세요."));

    console.log(choice + "번 메뉴를 선택하셨습니다.");

    if (choice < 1 || choice > 4) {
        break;
    }

    switch(choice) {
        case 1:
            console.log("아이스 아메리카노");
            break;
        case 2:
            console.log("카페 라떼");
            break;
        case 3:
            console.log("카푸치노");
            break;
        case 4:
            console.log("홍차");
            break;
        default:
            console.log("죄송합니다.");    
    }
}

console.log("안녕히 가세요.");
