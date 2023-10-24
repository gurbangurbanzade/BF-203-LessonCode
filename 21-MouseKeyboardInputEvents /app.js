let helloBtn = document.querySelector(".helloBtn");

// console.log(helloBtn);

// helloBtn.onclick = () => {
//   console.log("salamlar");
// };

// helloBtn.addEventListener("click", getEvent);
helloBtn.addEventListener("dblclick", getEvent);

function getEvent(e) {
  // console.log("salamlar");
  // console.log(e.target);
  // // console.log(e.);
  // e.target.innerText = "sagolun";
  // console.log(e.target.innerText);
  console.log(e.type);
  // e.preventDefault();
}

// myForm = document.querySelector(".myForm");

// myForm.addEventListener("click", function (e) {
//   console.log("datalar gelid");
//   // e.preventDefault();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("yuklenir...");
// });

// document.removeEventListener("DOMContentLoaded", function () {
//   console.log("yuklenir...");
// });

// function doSomething() {
//   console.info("DOM loaded");
// }

// if (document.readyState === "loading") {
//   // Loading hasn't finished yet
//   document.addEventListener("DOMContentLoaded", doSomething);
// } else {
//   // `DOMContentLoaded` has already fired
//   doSomething();
// }

let box = document.querySelector(".box");
let childBox = document.querySelector(".childBox");
box.addEventListener("click", function () {
  console.log("box");
});
childBox.addEventListener("click", function (e) {
  console.log("childBox");
  // e.stopPropagation();
});
// });

let itemBox = document.querySelector(".itemBox");

// itemBox.addEventListener("mouseover", getEvent);
// itemBox.addEventListener("mouseout", getEvent);
// itemBox.addEventListener("mouseenter", getEvent);
// itemBox.addEventListener("mouseleave", getEvent);

function getEvent() {
  // console.log("mouseOver");
  console.log("out");

  // itemBox.style.color = "red";
  box.style.backgroundColor = "yellow";
}

// document.addEventListener("keypress", function (e) {
//   console.log(e.key);
//   console.log(e.keyCode);
// });

// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
// });

// document.addEventListener("keyup", function (e) {
//   console.log(e.key);
// });

let input = document.querySelector("#txtTaskName");

// input.addEventListener("focus", function () {
//   console.log("focus olundu");
// });
// input.addEventListener("copy", function () {
//   console.log("kopyalandi");
// });

// input.addEventListener("paste", function (e) {
//   console.log("yapisdirildi");
//   console.log(e.target);
//   // input.value = "";
//   e.target.value = "";
// });

// input.addEventListener("cut", function () {
//   console.log("kopyalandi");
// });

// input.addEventListener("select", function () {
//   console.log("kopyalandi");
// });
// input.addEventListener("blur", function () {
//   console.log("kopyalandi");
// });

input.addEventListener("input", function () {
  // console.log("kopyalandi");
  // helloBtn.innerText = input.value;

  // input.value[input.value.length - 2] = "*";
  // input.value = "*********";
  console.log(input.value);

  setTimeout(() => {
    str = "";
    // for (let elem of input.value) {
    //   str += "*";
    // }
    for (let i = 0; i < input.value.length; i++) {
      str += "*";

      // if (i == input.value.length - 1) {
      //   str += input.value[i];
      // }
    }
    input.value = str;
  }, 500);
});

helloBtn = document.querySelector(".helloBtn");
myInput = document.querySelector(".myInput");
// a=5;
let arr = [];
helloBtn.addEventListener("click", function () {
  // console.log(myInput.value);

  arr.push(myInput.value);
  // console.log(arr);
  myInput.value = "";
  // console.log(arr);
});

console.log(arr);

-2 input yaradin
-buttona klik edende iputlarin deyeri konsola yazilsin
-iputlarin deyeri name ve surname kimi bir obyektin terkibinde arraya push olunsun



