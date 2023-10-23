// console.log(window);
// console.log(document);
// console.log(document.location);
// console.log(document.location.port);
// console.log(document.location.host);
// console.log(document.children[0]);
// console.log(document.children[0].children);
// console.log(document.children[0].children[1]);
// console.log(document.children[0].children[1].children);
let txtTaskName = document.querySelector("#txtTaskName");
// let taskList = document.querySelector("#task-list");
// console.log(taskList);
// console.log(taskList.children[0]);
// console.log(taskList.children[0].innerText);

// let item = document.querySelector(".list-group-item");
// console.log(item.innerText);

// let items = document.querySelectorAll(".list-group-item");

// console.log(items);

// console.log(taskList.childNodes);

let box = document.querySelector(".box");

// console.log(box.childNodes);
// console.log(box.hasChildNodes());
let items = document.querySelectorAll(".list-group-item");

// console.log(items);
items = Array.from(items);
// console.log(items);

let item1 = document.querySelector(".list-group-item");
// console.log(item1);

// item1.style.color = "red";
// item1.style.color = "green";

// item1.style.backgroundColor = "gray";
// item1.style.display = "none";

for (let elem of items) {
  //   console.log(elem.innerText);
  //   elem.style.backgroundColor = "green";
  //   elem.innerText = "bu gun doma basladiq";
  //   console.log(elem.innerText);
}

let li = document.getElementsByTagName("li");
let body = document.getElementsByTagName("body");

// console.log(li);
// console.log(body[0]);

let input = document.getElementsByName("exampleInput");
// console.log(input[0]);

// console.log(item1.parentElement.parentElement.parentElement.parentElement);

let ul = document.querySelector("#task-list");

// console.log(ul);
// console.log(ul.firstElementChild.innerText);
// console.log(ul.firstElementChild.nextElementSibling);
// console.log(ul.firstElementChild.nextElementSibling.previousElementSibling);

// box.innerHTML = `  <li class="task list-group-item item1">
// <div class="form-check">
//   <input type="checkbox" id="1" class="form-check-input" />
//   <label for="1" class="form-check-label">item 1</label>
// </div>
// </li>`;

// box.innerText = `
// <li class="task list-group-item item1">
// <div class="form-check">
//   <input type="checkbox" id="1" class="form-check-input" />
//   <label for="1" class="form-check-label">item 1</label>
// </div>
// </li>

// `;

// item1.nextElementSibling.style.color = "red";
// console.log(item1.nextElementSibling);
// item1.style.display = "none";
// console.log(ul.textContent);
// console.log(ul.innerText);
let h1 = document.createElement("h1");
h1.textContent = "Test ucun yaradildim";
let li4 = document.createElement("li");
let div = document.createElement("div");
let inp = document.createElement("input");
let label = document.createElement("label");

li4.className = "task list-group-item item4";
div.className = "form-check";
inp.className = "form-check-input";
label.className = "form-check-label";

label.textContent = "item 4";

ul.appendChild(li4);
li4.appendChild(div);
div.appendChild(inp);
div.appendChild(label);

// ul.prepend(h1);
// ul.append(h1);
// ul.removeChild(ul.firstElementChild);

ul.replaceChild(li4, ul.firstElementChild);

// console.log(ul.className);
// console.log(ul.classList);

let helloBtn = document.querySelector(".helloBtn");
let count = 4;
helloBtn.addEventListener("click", function () {
  console.log("salam bf203");
  // element yaratma
  let li4 = document.createElement("li");
  let div = document.createElement("div");
  let inp = document.createElement("input");
  let label = document.createElement("label");

  li4.className = "task list-group-item item4";
  div.className = "form-check";
  inp.className = "form-check-input";
  label.className = "form-check-label";

  label.textContent = `${txtTaskName.value}`;

  ul.appendChild(li4);
  li4.appendChild(div);
  div.appendChild(inp);
  div.appendChild(label);
  count++;

  // rend deyisimi

  //   if (box.className.includes("red")) {
  //     box.classList.remove("red");
  //   } else {
  //     box.classList.add("red");
  //   }

  //   if (box.classList.contains("red")) {
  //     box.classList.remove("red");
  //   } else {
  //     box.classList.add("red");
  //   }

  //   box.classList.toggle("red");

  // get input value

  console.log(txtTaskName.value);
  txtTaskName.value = "";
});
