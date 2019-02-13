var squarev1 = (n) => {
    var result = n * n;
    return result;
};

var squarev2 = (n) => n * n;

// when there is only one argument parentheses can be committed
var squarev3 = n => n * n;

console.log(squarev1(9));
console.log(squarev2(9));
console.log(squarev3(9));
// output
// 81
// 81
// 81

var user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
}

user.sayHi();          // error
user.sayHi(1, 2, 3);   // error

user.sayHiAlt();
// output
/*
[Arguments] {}
Hi. I'm Andrew
*/

//user.sayHiAlt(1, 2, 3);
// output
/*
[Arguments] { '0': 1, '1': 2, '2': 3 }
Hi. I'm Andrew
*/
