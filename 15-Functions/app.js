// salamlama();

// function salamlama() {
//   console.log("Salam");
// }
// sayHello();

// let sayHello = function () {
//   console.log("hello");
// };

// sayHello();

// function salamlama() {
//   console.log("Salam");
// }

// let sayHello = () => {
//   console.log("Hello");
// };

// (function () {
//   console.log("Anonim function");
// })();

// function getSum() {
//   console.log(9 + 10);
// }

// getSum();

// function calc() {
//   console.log(9 + 10);
//   console.log(9 - 10);
// }

// calc();
// let name = "hasan";
// const girlName = "lamiye";

// sayHello("qurban");
// sayHello("ali");
// sayHello("veli");
// sayHello("hamida");
// sayHello(girlName);

// function sayHello(name) {
//   console.log("salam", name);
// }

// f(x)=3*x+1 f(3)=3*3+1=10
// y=f(3) und

// function getSum(num1, num2) {
//   //   console.log(num1 + num2);
//   return num1 + num2;
// }
// function getDiff(num1, num2) {
//   //   console.log(num1 - num2);
//   return num1 - num2;
// }

// // getSum(3, 5);

// // let firstFunction = getSum(3, 5);

// // console.log(firstFunction);
// // getDiff(3, 5);

// function calc(num1, num2) {
//   let sum = getSum(num1, num2);
//   let diff = getDiff(num1, num2);
//   console.log(sum * diff);
// }

// calc(3, 5);

// function sum(num1, num2) {
//   console.log(num1 + num2);
//   return num1 + num2;
//   console.log(num1 - num2);
// }

// sum(3, 5);
// let cem = sum(3, 5);

// console.log(cem);

// function sum(num1 = 0, num2 = 0) {
//   return num1 + num2;
// }

// console.log(sum(2, 3));

// function sum(num1, num2) {
//   console.log(arguments.length);
//   console.log(num1 + num2);
//   //   console.log(arguments[1]);
//   if (arguments.length > 0) {
//     return "kimse maxinasiya edir";
//   } else {
//     return "artiq parametr gelmeyib";
//   }
// }

// // console.log(sum(2, 3, 4, 5, 6, 7, 8));

// console.log(sum(2, 3, 4));

// let sum = (num1, num2) => {
//   console.log(num1 + num2);
//   return num1 + num2;
// };

// console.log(sum(3, 5));

// object[
//     name:"qurban"
// soyad:"qurbanzada"
// ]
// let arr = [1, 2, 3, () => "salamlar"];

// console.log(arr[0]);
// console.log(arr[3]());

let obj = {
  name: "qurban",
  surname: "qurbanzada",
  getFullNameArrow: () => {
    // return this.name + " " + this.surname;
    return this;
  },
  getFullNameRegular: function () {
    // return this.name + " " + this.surname;
    return this;
  },
  getFullname: function name() {
    console.log("salamlar");
  },
};

obj.getFullname();
// console.log(obj.name);
// console.log(obj.getFullNameArrow());
// console.log(obj.getFullNameRegular());

let getFullNameArrow = () => {
  //   return this.name + " " + this.surname;
  return this;
};
function getFullNameRegular() {
  //   return this.name + " " + this.surname;
  return this;
}

// console.log(getFullNameArrow());
// console.log(getFullNameRegular());
// console.log(window.alert("salam bakuk"));
// console.log(window.alert("salam bakuk"));
// console.log(window);

// function createObj(name,surname) {
//     return{
//         this.name:name,

//     }
// }
