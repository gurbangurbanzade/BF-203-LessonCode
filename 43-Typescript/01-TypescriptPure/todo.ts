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
        console.log(e?.target?.id);

        // let arr: {
        //   id: number;
        //   tittle: string;
        // }[] = [...arrTodos];

        arrTodos = arrTodos.filter((elem) => elem.id != e?.target?.id);

        console.log(arrTodos);
        setTodos(arrTodos);
      });
    }
  });

  todoInput.value = "";
}
