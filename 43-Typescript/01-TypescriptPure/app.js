// console.log("hello world");
// console.log("hello bdu");
// console.log("hello bf203");
// console.log("hello gurban");
var num = 1;
var word = "salam";
word = "".concat(num);
console.log(word);
var bool = true;
bool = false;
var obj;
obj = {
    name: "gurban",
    surname: "gurbanzada",
    age: 30,
};
console.log("obj", obj);
console.log("obj", obj);
var obj2;
obj2 = {
    name: "kanan",
    age: 2,
    isStudent: false,
};
console.log("obj2", obj2);
var obj3 = {
    name: "qurban",
    id: 1,
};
var arr1 = ["a", "b", "c"];
var arr2 = [1, 2, 3, 4];
var arr3 = [true, true, false];
var arr4 = [
    { name: "1", id: 3 },
    { name: "2", id: 4 },
];
var sweetArr;
sweetArr = ["salam", 2, true];
console.log(sweetArr);
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
console.log("yanvar", Month.Jan);
function sayHello() {
    console.log("hellooooo");
}
sayHello();
function sayBye(a) {
    // console.log("bye-bye");
    return "bye-bye";
}
sayBye("qurban");
sayBye("kanan");
var result;
result = "soz";
result = 5;
var arr;
arr = [2, 3, 4, true, "soz,"];
var a;
a = 4;
a = "soz";
a = true;
