var members = ['yoonah', 'chaelin', 'joonhee', 'geunyoung'];
console.log(members[1]);
var i = 0;
while(i < members.length) {
    console.log('array loop', members[i]);
    i++;
}

var roles = {
    'krump' : 'yoonah',
    'house' : 'geunyoung',
    'poppin' : 'joonhee'
}

console.log(roles.poppin);

for(var name in roles) {
    console.log('object => ', name, ', value => ', roles[name]);
}

var v1 = 'v1';
var v2 = 'v2';

var p = {
    v1: 'v1',
    v2: 'v2',
    f1: function (){
        console.log(this.v1);
    },
    f2: function (){
        console.log(this.v2);
    }
}





p.f1();
p.f2();