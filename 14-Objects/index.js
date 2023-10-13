let students = [
  {
    id: 1,
    name: "asmar",
    age: 19,
    kesr: false,
    hobbies: ["shopping", "restoran", "travel"],
    password: {
      email: "asmar@mail.com",
      pass: "12345",
      memmbers: {
        qardas: "qardas",
      },
    },
  },
  {
    id: 2,
    name: "shanana",
    age: 20,
    kesr: true,
    hobbies: ["kitab", "resm"],
    password: {
      email: "shana@mail.com",
      pass: "123456",
      memmbers: {
        qardas: "qardas",
      },
    },
  },
  {
    id: 3,
    name: "nicat",
    age: 21,
    kesr: false,
    password: {
      email: "nicat@mail.com",
      pass: "1234569",
    },
  },
  {
    id: 4,
    name: "ayan",
    age: 22,
    kesr: true,
    hobbies: ["mahni oxumaq", "mahni qulaq asmaq"],
    password: {
      email: "ayan@mail.com",
      pass: "123456",
      memmbers: {
        qardas: "qardas",
        baci: "baci",
      },
    },
  },
];

console.log(students);
// console.log(students[1].password.email);
// console.log(students[3].hobbies[1]);
// console.log(students[2].kesr);
let sum = 0;
for (let i = 0; i < students.length; i++) {
  //   console.log(students[i].name, students[i].age);
  //   console.log(students[i].name, students[i].hobbies);
  //   console.log(students[i].name, students[i].kesr);
  //   console.log(students[i].name, students[i].password.memmbers?.qardas);
  // yaslarin cemi
  //   sum += students[i].age;
  //   console.log(students[i].hobbies);
  // hobbileri tek capa ver
  //   for (let j = 0; j < students[i].hobbies?.length; j++) {
  //     console.log(students[i].hobbies[j]);
  //   }
  // 20 den asagi
  //   if (students[i].age < 20) {
  //     console.log(students[i].name);
  //   }
  // pasvorddda 9 olan
  //   if (students[i].password.pass.includes("9")) {
  //     console.log(students[i].name);
  //   }
}
// console.log(sum);
// console.log(students[1]);
// console.log(students[3]);

// let obj = {
//   id: 5,
//   name: "aysun",
//   age: 23,
//   kesr: false,
//   hobbies: ["netflix", "dostlarla vaxt kecirmek"],
//   password: {
//     email: "aysun@mail.com",
//     pass: "123456",
//   },
// };
// students.push(obj);
// students.unshift(obj);
// students.pop();
// students.shift();
// console.log(JSON.stringify(students));
// console.log(JSON.parse(JSON.stringify(students)));
// console.log(students.toString());
// console.log(students/);
// let arr = ["alma", "armud", "heyva", "nar", "mandalin", "ezgil"];
// let arr2 = [1, 2, [2, 3], [1, 4]];

// console.log(arr.join("-"));
// delete arr[0];
// let newArr = arr.concat(arr2);
// console.log(arr.slice(1, 4));
// console.log(arr.slice(-3));

// let newArr = arr.splice(1, 3, "ananas", "mango");
// console.log(arr);
// console.log(arr2.flat());

// console.log(newArr);
// let a = "qurban";
// a.sub;
// let obj = {
//   name: "qurban",
//   age: 30,
// };

// let { name: ad, age: yas } = obj;

// console.log(ad);
// console.log(yas);

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 120];
// let arr2 = [3, 4, 6, 7, 8];

// for (let i = 0; i < arr1.length; i++) {
//   //   console.log("bu 1-ci arraydir", arr1[i]);

//   for (let j = 0; j < arr2.length; j++) {
//     // console.log("bu 2-ci arraydir", arr2[j]);
//     if (arr1[i] == arr2[j]) {
//       console.log(arr1[i]);
//     }
//   }
// }

// let obj = {};
// let obj2 = new Object();

// obj.name = "ali";
// obj.age = 22;

// console.log(obj);
