// let arr2 = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// 17. Verilmiş array-in bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin

// 18. Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın

// 19. Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.

// 20. Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "string") {

//     for (let j = 0; j < arr[i].length; j++) {
//       //   console.log(arr[i][j]);

//       if (arr[i][j] == arr[i][j].toUpperCase()) {
//         // console.log(arr[i][j]);
//         count++;
//       }
//     }
//     if (count > 2) {
//       console.log(arr[i]);
//     }

//     count = 0;
//   }
// }

// console.log(count);

// function LetterFind(arr) {
//   let array = [];
//   let str = "";
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "string") {
//       for (let j = 0; j < arr[i].length; j++) {
//         //   console.log(arr[i][j]);

//         if (arr[i][j] == arr[i][j].toUpperCase()) {
//           // console.log(arr[i][j]);
//           count++;
//         }
//       }
//       if (count > 2) {
//         // console.log(arr[i]);
//         array.push(arr[i]);
//         str += arr[i] + " ";
//       }

//       count = 0;
//     }
//   }

//   return array, str;
// }

// console.log(LetterFind(arr2));

let arr = [1, 2, 5, 2, 5];

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength(arr));

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(arrSum(arr));

function changeSector(arr) {
  let array = arr;
  let index1 = arr[0];
  let indexEnd = arr[arr.length - 1];
  arr[0] = indexEnd;
  arr[arr.length - 1] = index1;
  return arr;
}

console.log(changeSector(arr));

function createObj(name = "defolt", surname = "defolt") {
  return {
    name: name,
    surname: surname,
  };
}
console.log(createObj("qurban", "qurbanzade"));
console.log(createObj());

let obj = {
  name: "qurban",
  surname: "qurbanzada",
};
// let obj2 = {
//   name: "qurban",
// };

function sumValue(obj) {
  return obj.name + " " + obj.surname;
}

console.log(sumValue(obj));
// console.log(sumValue(obj2));
