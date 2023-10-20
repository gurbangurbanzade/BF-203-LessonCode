// // let obj=
// class Animal {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   getInfo() {
//     console.log(this.name + " " + this.color);
//   }
// }

// Animal.prototype.getColor = function () {
//   console.log(this.color);
// };

// class Cat extends Animal {}

// let animal1 = new Animal("aslan", "sari");
// // let animal2 = new Animal("aslan", "sari");
// let cat1 = new Cat("mestan", "ag");
// // let cat2 = new Cat("tom", "qara");

// console.log(animal1);
// animal1.getColor();
// // console.log(animal2);
// console.log(cat1);
// cat1.getColor();
// // console.log(cat2);
// // cat2.getColor();

// class Person {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
// }

// let person1 = new Person("eli", "sarimtil");

let numbers = [10, 9, 8, 1, 2, 3, 4];
// for each
// let sum = 0;

// numbers.forEach((element) => {
//   sum += element;
// });
// console.log(sum);

// Array.prototype.myForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i]);
//   }
// };

// console.log("-----------");
// let mySum = 0;
// numbers.myForEach((element) => {
//   mySum += element;
// });

// map

// Array.prototype.myMap = function (callback) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(callback(this[i]));
//   }

//   return arr;
// };
// console.log(numbers);

// let numbers2 = numbers.myMap((elem) => elem * 2);
// console.log(numbers2);

// console.log(mySum);

// callback

// console.log("callback");

// function sayName() {
//   console.log("qurban");
// }

// function saySurname() {
//   sayName();
//   console.log("qurbanzada");
// }

// function sayFullname(callback) {
//   // saySurname
//   // console.log()

//   callback(); // saySurnamr
// }

// sayFullname(saySurname);

// // sayName();
// // saySurname();

// function logla(x) {
//   console.log(x);
// }

// logla(7);

console.log(numbers);

let arr = ["z", "a", "b", "c", "a", "d", "c"];

let sum = 0;
numbers.forEach((element) => {
  sum += element;
});
console.log(sum);

let sumReduce = numbers.reduce((acc, elem) => {
  return acc + elem;
}, 10);

let mapReduce = numbers.reduce((acc, elem, i) => {
  if (i > 1) {
    acc.push(elem * elem);
  }
  return acc;
}, []);

let objReduce = arr.reduce((acc, elem) => {
  // if(acc[elem]){

  // }

  if (acc[elem]) {
    acc[elem]++;
  } else {
    acc[elem] = 1;
  }

  return acc;
}, {});

// console.log(sumReduce);
// console.log(mapReduce);
console.log(objReduce);

let countyr = [
  {
    name: "azerbaycan",
    city: ["baku", "london"],
  },
  {
    name: "azerban",
    city: ["baku", "london"],
  },
  {
    name: "zerbaycan",
    city: ["baku", "london"],
  },
  {
    name: "erbaycan",
    city: ["baku", "london"],
  },
  {
    name: "azerbaycan",
    city: ["baku", "london"],
  },
  {
    name: "rbaycan",
    city: ["baku", "london"],
  },
  {
    name: "azerbaycan",
    city: ["baku", "london"],
  },
  {
    name: "rbaycan",
    city: ["baku", "london"],
  },
  {
    name: "ycan",
    city: ["baku", "london"],
  },
];

let result = countyr.reduce((acc, elem) => {
  acc[elem.name[0]] ? acc[elem.name[0]]++ : (acc[elem.name[0]] = 1);
  return acc;
}, {});

console.log(result);

let text = "gurban";
// console.log(text[text.length - 1]);

// for (let letter of text) {
//   console.log(letter);
// }

// for (let index in text) {
//   console.log(index);
// }

// let obj = {
//   name: "qurban",
//   surname: "qurbanzada",
//   teacher: true,
// };

// for (let key in obj) {
//      console.log(key);  // EY ALI INSANLAR keyleri qaytarir
//   console.log(obj[key]); // value-lari qaytarir
// }
let str = [];
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));
console.log(arr.sort());
// console.log(arr.sort((a, b) => a - b));
