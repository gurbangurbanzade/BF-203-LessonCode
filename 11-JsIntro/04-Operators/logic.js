//- ! && ||
//   &&
//            t       t
// console.log(3 > 2 && 2 > 1);

//            f         t
// console.log(3 > 5 && 2 > 1);

//            t         t       t
// console.log(3 > 1 && 2 > 1 && 1 > 0);

// console.log(3 < 1 && 2 < 1 && 1 < 0);

//   ||
//            t       f
// console.log(3 > 2 || 2 > 5);

//            f         t
// console.log(3 > 5 || 2 < 1);

//            f        f       t
// console.log(3 < 1 || 2 < 1 || 1 > 0);

//                  t            f
// console.log(3 > 1 && 2 > 1 && 1 < 0);

//                  t            f
// console.log((3 > 1 && 2 > 1) || 1 < 0);
//
// console.log(3 > 1 || 2 < 1 || 1 < 0);

// console.log(3 > 1 || (2 < 1 && 1 < 0));

// console.log(!(3 > 1 || 2 < 1));
