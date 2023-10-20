// // // let eded = Math.trunc(Math.random() * 100) + 1;

// // // // console.log(eded);

// // // // let date = new Date();
// // // // console.log(date.getDay());
// // // // console.log(date.getFullYear());
// // // // // date.setFullYear(2025);
// // // // console.log(date.getFullYear());
// // // // console.log(date.getTime());
// // // // let date1 = new Date("12/02/2020");
// // // // let date2 = new Date("12/02/2008");

// // // // let date1 = new Date();
// // // // debugger;

// // // let date2 = new Date();
// // // // date2.
// // // console.log(date1.getTime());
// // // // console.log(date2.getTime());
// // // // console.log(date1 > date2);

// // // let a = 5;
// // // debugger;
// // // let b = 3;
// // // let c = a + b;
// // // let d = a + b + c;

// // // console.log(d);

// // // // "qurban".
// // // for each

// // let arr = [1, 2, 3, 4, 5, 6];
// // console.log(arr);
// // // for (let i = 0; i < arr.length; i++) {
// // //   console.log(arr[i]);
// // // }

// // // arr.forEach(function (element) {
// // //   console.log(element);
// // // });

// // // arr.forEach((elem, bizimarra, indeks) =>
// // //   console.log(elem, "indeksi-", bizimarra, "arr-", indeks)
// // // );
// // // console.log(arr);
// // let arr2 = arr.forEach((elem) => {
// //   //   console.log(elem * 2);

// //   return elem * 2;
// // });

// // // console.log(arr2);

// // arr2 = arr.map((elem) => {
// //   return elem * 2;
// // });
// // // console.log(arr2);

// // let students = [
// //   {
// //     name: "fatma",
// //     age: 19,
// //   },
// //   {
// //     name: "aysun",
// //     age: 21,
// //   },
// //   {
// //     name: "sevinc",
// //     age: 20,
// //   },

// //   {
// //     name: "sabina",
// //     age: 22,
// //   },
// //   {
// //     name: "fatime",
// //     age: 20,
// //   },
// // ];
// // // let adult = students.map((elem, i, arr) => {
// // //   if (elem.age > 20) {
// // //     return elem;
// // //   }
// // // });
// // // students.forEach((elem) => {
// // //   //   console.log(elem);
// // //   //   console.log(elem.name);

// // //   //   console.log(elem.age);

// // //   if (elem.age > 20) {
// // //     console.log(elem);

// // //     adult.push(elem);
// // //   } else {
// // //     console.log(elem.name + " " + "yasi 20den azdir");
// // //   }
// // // });

// // // console.log(adult);
// // console.log(students);
// // let adult = [];

// // adult = students.find((elem) => elem.age == 20);

// // adult = students.filter((elem) => elem.age > 19);

// // adult = students.every((elem) => elem.age > 19);
// // adult = students.some((elem) => elem.age > 21);

// // console.log(adult);

// // // console.log(arr.includes(5, -2));
// // console.log("salam");

// let str = "My name is Gurban Alikram ali azerbaycan";

// // console.log(str.split(" "));

// // function getLetter(word) {
// //   word = word.split(" ");
// //   console.log(word);
// //   let sum = "";
// //   for (let i = 0; i < word.length; i++) {
// //     console.log(word[i][0]);
// //     sum += word[i][0];
// //   }
// //   console.log(sum);
// // }

// // function getLetter(word) {
// //   word = word.split(" ");
// //   console.log(word);
// //   let arr = [];
// //   let result = "";
// //   for (let i = 0; i < word.length; i++) {
// //     let soz = "";

// //     if (word[i].length > 4) {
// //       console.log(word[i]);
// //       soz += word[i][0] + (word[i].length - 2) + word[i][word[i].length - 1];
// //       result += soz + " ";
// //     } else {
// //       result += word[i] + " ";
// //     }
// //   }

// //   console.log(result);
// // }

// // getLetter(str);

// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];

// function getObj(arr) {
//   console.log(arr.flat());
//   arr = arr.flat();
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       //   console.log(obj[arr[i]].value);
//       obj[arr[i]]++;
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }
// }

// getObj(input);

// let obj = [
//   { name: "a1", age: 16 },
//   { name: "a2", age: 17 },
//   { name: "a4", age: 19 },
//   { name: "a3", age: 18 },
// ];

// function getAge(arr) {
//   let max = arr[0].age;
//   let min = arr[0].age;
//   let minElem;
//   let maxElem;

//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i].age) {
//       max = arr[i].age;
//       //   maxElem = arr[i];
//     }
//     if (min > arr[i].age) {
//       min = arr[i].age;
//       //   maxElem = arr[i];
//     }
//   }
//   console.log([min, max, max - min]);
// }
// getAge(obj);

// let fact = 1;
// let n = -5;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }

// console.log(fact);

let arr1 = [1, -2, -3, 4];

// console.log(
//   arr.reduce((acc, elem) => {
//     if (elem > 0) {
//       acc.push(elem);
//     }

//     return acc;
//   }, [])
// );

// let obj = {
//   name: "qurban",
//   surname: "qurbanzada",
//   teacher: true,
// };
// for (key in obj) {
//   console.log(obj[key]);
// }
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// function callback(element) {
//   console.log(element); //insert logic
// }

var array = [2, 4, 6, 8, 10];
array.myForEach((elem) => console.log(elem));

Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    // callback(this[i]);
    arr.push(callback(this[i]));
  }
  return arr;
};
arr3 = array.myMap((elem) => elem * 2);
console.log(arr3);
