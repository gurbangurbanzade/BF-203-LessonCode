// let eded = Math.trunc(Math.random() * 100) + 1;

// // console.log(eded);

// // let date = new Date();
// // console.log(date.getDay());
// // console.log(date.getFullYear());
// // // date.setFullYear(2025);
// // console.log(date.getFullYear());
// // console.log(date.getTime());
// // let date1 = new Date("12/02/2020");
// // let date2 = new Date("12/02/2008");

// // let date1 = new Date();
// // debugger;

// let date2 = new Date();
// // date2.
// console.log(date1.getTime());
// // console.log(date2.getTime());
// // console.log(date1 > date2);

// let a = 5;
// debugger;
// let b = 3;
// let c = a + b;
// let d = a + b + c;

// console.log(d);

// // "qurban".
// for each

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach(function (element) {
//   console.log(element);
// });

// arr.forEach((elem, bizimarra, indeks) =>
//   console.log(elem, "indeksi-", bizimarra, "arr-", indeks)
// );
// console.log(arr);
let arr2 = arr.forEach((elem) => {
  //   console.log(elem * 2);

  return elem * 2;
});

// console.log(arr2);

arr2 = arr.map((elem) => {
  return elem * 2;
});
// console.log(arr2);

let students = [
  {
    name: "fatma",
    age: 19,
  },
  {
    name: "aysun",
    age: 21,
  },
  {
    name: "sevinc",
    age: 20,
  },

  {
    name: "sabina",
    age: 22,
  },
  {
    name: "fatime",
    age: 20,
  },
];
// let adult = students.map((elem, i, arr) => {
//   if (elem.age > 20) {
//     return elem;
//   }
// });
// students.forEach((elem) => {
//   //   console.log(elem);
//   //   console.log(elem.name);

//   //   console.log(elem.age);

//   if (elem.age > 20) {
//     console.log(elem);

//     adult.push(elem);
//   } else {
//     console.log(elem.name + " " + "yasi 20den azdir");
//   }
// });

// console.log(adult);
console.log(students);
let adult = [];

adult = students.find((elem) => elem.age == 20);

adult = students.filter((elem) => elem.age > 19);

adult = students.every((elem) => elem.age > 19);
adult = students.some((elem) => elem.age > 21);

console.log(adult);

// console.log(arr.includes(5, -2));
