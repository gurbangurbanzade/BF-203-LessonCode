console.log("todo");
var todoForm = document.querySelector(".todoForm");
var todoInput = document.querySelector(".todoInput");
var todos = document.querySelector(".todos");
// [{id:1,tittle:"todo"}]
// console.log(todos);
var arrTodos = [];
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
function getTodo(val, arr, c) {
    //   let obj: {
    //     id: number;
    //     tittle: string;
    //   };
    var obj = {
        id: arr.length + 1,
        tittle: val,
    };
    arr.push(obj);
    return arr;
}
function setTodos(arr) {
    todos.innerHTML = "";
    arr.forEach(function (elem) {
        // console.log(elem.tittle);
        todos.innerHTML += "<li>".concat(elem.tittle, "\n    <button id=\"").concat(elem.id, "\" class=\"delBtn\">Delete</button>\n    </li>");
        var delBtns = document.querySelectorAll(".delBtn");
        for (var _i = 0, delBtns_1 = delBtns; _i < delBtns_1.length; _i++) {
            var btn = delBtns_1[_i];
            btn.addEventListener("click", function (e) {
                var btn = e.target;
                console.log(btn.id);
                // let arr: {
                //   id: number;
                //   tittle: string;
                // }[] = [...arrTodos];
                arrTodos = arrTodos.filter(function (elem) { return "".concat(elem.id) != btn.id; });
                console.log(arrTodos);
                setTodos(arrTodos);
            });
        }
    });
    todoInput.value = "";
}
//////////////////////////////////
function sum(a, c, b) {
    if (c === void 0) { c = 5; }
    console.log("c", c);
    return a + b;
}
console.log(sum(3, undefined, 10));
// console.log(sum("10", "20"));
function sayHello() {
    console.log("salam");
}
sayHello();
function sumX() {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    var sum = 0;
    number.forEach(function (elem) {
        sum += elem;
    });
    console.log(sum);
    return sum;
}
sumX(1);
sumX(1, 2);
sumX(1, 2, 3);
function sumY(x, y) {
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
var objX;
objX = {
    name: "qurban",
    age: 30,
};
console.log(objX);
var obj7 = {
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
