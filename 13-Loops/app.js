// let month = prompt("Ayin nomresini daxil edin");
// let contreller = true;
// do {
//   switch (month) {
//     case "1":
//       console.log("winter");
//       contreller = false;
//       break;
//     case "2":
//       console.log("winter");
//       contreller = false;

//       break;
//     case "3":
//       console.log("spring");
//       contreller = false;

//       break;

//     default:
//       month = prompt("yeniden daxil edin");
//       break;
//   }
// } while (contreller);
//          01234
// let word = "apple";
// console.log(word.length);
// console.log(word[0]);
// console.log("baku"[3]);
// console.log("london".length);
// let soz = "azerbaycan";
// console.log(soz[soz.length - 1]);
// console.log(soz[-1]);
// console.log(soz[0]);
// console.log(soz[1]);
// console.log(soz[6]);

// for (let i = 0; i < soz.length; i++) {

//   if (soz[i] == "c") {
//     break;
//   }
//   console.log(soz[i]);

// }

// for (let i = 0; i < soz.length; i++) {
//   if (soz[i] == "a" || soz[i] == "e") {
//     console.log("burada bir sait var idi");
//     continue;
//   }
//   console.log(soz[i]);
// }

// let soz1 = "ananas";
// let soz2 = "armud";
// let uzunluq;

// if (soz1.length < soz2.length) {
//   uzunluq = soz1.length;
// } else {
//   uzunluq = soz2.length;
// }

// for (let i = 0; i < uzunluq; i++) {
//   if (soz1[i] == soz2[i]) {
//     console.log(`${soz1[i]} -bu herf tekrarlanir`);
//   }
// }

// arrays
// let arr = [1, 2, 3, 4, 5, 6, 99];
// let arr2 = ["alma", "armud", "heyva"];
// let arr3 = [1, 2, true, undefined, null, NaN, "armud", false];

// console.log(arr3[3]);
// console.log(arr3.length);
// console.log(arr3[8]);
// arr3.length = 12;
// arr3[11] = "men sonuncu elementem";

// console.log(arr3);

// let arr=[];
// let arr1=new Array();
// soz[0]
// let arr = ["qurban", "farman", "hamida", "laman", "samaya"];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i][0]);
//   console.log(arr[i][arr[i].length - 1]);
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i][1] == "a") {
//     console.log(arr[i]);
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == "laman") {
//     console.log("axtarilan adam tapildi");
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length < 6) {
//     console.log(arr[i]);
//   }
// }

let arr = [1, 2, 5, 8, 3, 6, 2];
// let arr = [-11, -2, -5, -8, -1];

// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);

let sum = 0;
let hasil = 1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    hasil = hasil * arr[i];
  } else {
    sum = sum + arr[i];
  }
}
console.log(sum);
console.log(hasil);
console.log(hasil - sum);
