console.log("todo");

let todoForm = document.querySelector(".todoForm")!;
let todoInput = document.querySelector<HTMLInputElement>(".todoInput")!;
let todos = document.querySelector<HTMLUListElement>(".todos")!;
// [{id:1,tittle:"todo"}]
// console.log(todos);
let arrTodos: {
  id: number;
  tittle: string;
}[] = [];
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  getTodo(todoInput.value, arrTodos);

  setTodos(arrTodos);

  //   let delBtns = document.querySelectorAll(".delBtn")!;

  //   for (let btn of delBtns) {
  //     btn.addEventListener("click", function (e) {
  //       console.log(e?.target?.id);

  //       let arr = arrTodos.filter((elem) => elem.id != e?.target?.id);
  //       console.log(arr);
  //       setTodos(arr);
  //     });
  //   }
});

function getTodo(val: string, arr: object[], c?: string): object[] {
  //   let obj: {
  //     id: number;
  //     tittle: string;
  //   };

  let obj = {
    id: arr.length + 1,
    tittle: val,
  };

  arr.push(obj);
  return arr;
}

function setTodos(arr: { id: number; tittle: string }[]) {
  todos.innerHTML = "";
  arr.forEach((elem) => {
    // console.log(elem.tittle);
    todos.innerHTML += `<li>${elem.tittle}
    <button id="${elem.id}" class="delBtn">Delete</button>
    </li>`;

    let delBtns = document.querySelectorAll(".delBtn")!;
    for (let btn of delBtns) {
      btn.addEventListener("click", function (e) {
        const btn = e.target as Element;
        console.log(btn.id);

        // let arr: {
        //   id: number;
        //   tittle: string;
        // }[] = [...arrTodos];

        arrTodos = arrTodos.filter((elem) => `${elem.id}` != btn.id);

        console.log(arrTodos);
        setTodos(arrTodos);
      });
    }
  });

  todoInput.value = "";
}
//////////////////////////////////

function sum(a: number, c: number = 5, b: number): number {
  console.log("c", c);
  return a + b;
}

console.log(sum(3, undefined, 10));
// console.log(sum("10", "20"));

function sayHello(): void {
  console.log("salam");
}

sayHello();

function sumX(...number: number[]): number {
  let sum = 0;

  number.forEach((elem) => {
    sum += elem;
  });
  console.log(sum);
  return sum;
}

sumX(1);
sumX(1, 2);
sumX(1, 2, 3);

function sumY(x: number, y: number): number;
function sumY(x: string, y: string): string;

function sumY(x: any, y: any): any {
  // :

  // number | string
  // if (typeof x == "string" && typeof y == "string") {
  //   return "ad  " + x + "  " + "soyad " + y;
  // }

  // if (typeof x == "number" && typeof y == "number") {
  //   let sum = x + y;
  //   return "cem=" + sum;
  // }

  return x + y;
}
console.log(sumY(5, 4));
console.log(sumY("qurban", " qurbanzade"));

let objX: {
  name: string;
  age: number;
};

objX = {
  name: "qurban",
  age: 30,
};

console.log(objX);

interface Adult {
  name: string;
  age: number;
}

interface Kids {
  name: string;
  age: number;
  isKid: boolean;
}

type Person = Adult & Kids;

let obj7 = {
  name: "gurban",
  age: 30,
  isKid: false,
};

console.log(obj7);

// interface Adult {
//   name: string;
//   age: number;
// }
// interface Kids {
//   name: string;
//   age: number;
//   isKid: boolean;
// }
// interface Person = Adult & Kids

// let obj5: Person = {
//   name: "kanan",
//   age: 2,
// };
// let obj6: Person = {
//   name: "ahmad",
//   age: 3,
// };

// console.log(obj5);
// console.log(obj6);
