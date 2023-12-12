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
                var _a;
                console.log((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.id);
                // let arr: {
                //   id: number;
                //   tittle: string;
                // }[] = [...arrTodos];
                arrTodos = arrTodos.filter(function (elem) { var _a; return elem.id != ((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.id); });
                console.log(arrTodos);
                setTodos(arrTodos);
            });
        }
    });
    todoInput.value = "";
}
