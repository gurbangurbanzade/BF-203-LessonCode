// eger (sert){

//     bu kodlar islesin

// } yoxsa{

//     bu kodlar islesin

// }
// let num = 4;

// if (num > 0) {
//   console.log("eded musbetdir");
// } else {
//   console.log("eded menfidir");
// }

// let result = 41;

// if (result > 50) {
//   console.log("telebe imtahani ugurlu kecib");
// } else {
//   console.log("telebe kesilib");
// }

// let btn = 9;

// if (btn == true) {
//   console.log("isiq yanir");
// } else {
//   console.log("isiq sonub");
// }

// if (false) {
//   console.log("isiq yanir");
// } else {
//   console.log("isiq sonub");
// }

// false - undefined null 0 "" NaN

// let num = 0;

// if (num > 0) {
//   console.log("eded musbetdir");
// } else if (num < 0) {
//   console.log("eded menfidir");
// } else {
//   console.log("eded 0-a beraberdir");
// }

// let result = 91;

// if (result < 51) {
//   console.log("telebe kesilib");
// } else if (result > 50 && result < 61) {
//   console.log("telebe imtahandan E alib");
// } else if (result > 60 && result < 71) {
//   console.log("telebe imtahandan D alib");
// } else if (result > 70 && result < 81) {
//   console.log("telebe imtahandan C alib");
// } else if (result > 80 && result < 91) {
//   console.log("telebe imtahandan B alib");
// } else if (result > 90) {
//   console.log("telebe imtahandan A alib");
// }

// let num = 0;

// if (num % 2 == 0) {
//   if (num == 0) {
//     console.log("eded sifirdir");
//   } else {
//     console.log("eded cutdur");
//   }
// } else {
//   console.log("eded tek");
// }

// if (num % 2 == 0 && num != 0) {
//   console.log("eded cutdur");
// } else if (num % 2 != 0 && num != 0) {
//   console.log("eded tek");
// } else {
//   console.log("eded sifirdir");
// }

// if (num == 0) {
//   console.log("eded sifirdir");
// } else if (num % 2 == 0) {
//   console.log("eded cutdur");
// } else {
//   console.log("eded tek");
// }

// let btn = true;

// if (btn == true) {
//   console.log("isiq yanir");
// } else {
//   console.log("isiq sonub");
// }

// btn ? console.log("isiq yanir") : console.log("isiq sonub");

// let age = 19;

// if (age > 18) console.log("adam yetiskindir");

// if ((5 > 10 && 4 > 9) || 1 > 0) {
//   console.log("calisir");
// } else {
//   console.log("calismir");
// }

let day = 10;
let food = "plov";

switch (day) {
  case 1:
    console.log("bazar ertes");
    break;
  case 2:
    console.log("cersenbe axsami");
    break;
  case 3:
    console.log("cersenbe");
    break;
  case 4:
    console.log("cume axsami");
    if (food == "plov") {
      console.log("ehsan verildi");
    } else {
      console.log("ehsan verilmedi");
    }
    break;
  case 5:
    console.log("cume");
    break;
  case 6:
    console.log("senbe");
    break;
  case 7:
    console.log("bazar");
    break;

  default:
    console.log("duzgun reqem deyil");
    break;
}
