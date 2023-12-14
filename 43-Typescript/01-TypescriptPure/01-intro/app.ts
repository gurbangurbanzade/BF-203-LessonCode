// console.log("hello world");
// console.log("hello bdu");
// console.log("hello bf203");
// console.log("hello gurban");

let num: number = 1;

let word: string = "salam";

word = `${num}`;
console.log(word);

let bool: boolean = true;
bool = false;

let obj: object;

obj = {
  name: "gurban",
  surname: "gurbanzada",
  age: 30,
};

console.log("obj", obj);
console.log("obj", obj);

let obj2: {
  name: string;
  age: number;
  isStudent: boolean;
};

obj2 = {
  name: "kanan",
  age: 2,
  isStudent: false,
};

console.log("obj2", obj2);

let obj3: {
  name: string;
  id: number;
} = {
  name: "qurban",
  id: 1,
};

let arr1: string[] = ["a", "b", "c"];
let arr2: number[] = [1, 2, 3, 4];
let arr3: boolean[] = [true, true, false];
let arr4: object[] = [
  { name: "1", id: 3 },
  { name: "2", id: 4 },
];
let sweetArr: [string, number, boolean, string?];
sweetArr = ["salam", 2, true];
console.log(sweetArr);

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

console.log("yanvar", Month.Jan);

function sayHello(): void {
  console.log("hellooooo");
}

sayHello();

function sayBye(a: string): string {
  // console.log("bye-bye");
  return "bye-bye";
}

sayBye("qurban");
sayBye("kanan");

let result: string | number;

result = "soz";
result = 5;

let arr: (string | number | boolean)[];

arr = [2, 3, 4, true, "soz,"];

type herseydenvar = string | number | boolean;

let a: herseydenvar;
a = 4;
a = "soz";
a = true;
