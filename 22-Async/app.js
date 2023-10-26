let start = document.querySelector(".startBtn");
let stop = document.querySelector(".stopBtn");
let back = document.querySelector(".backBtn");

let count = document.querySelector(".count");
// setTimeout(() => {
//   console.log(2);
// }, 2000);

// setInterval(() => {
//   console.log("salam");
// }, 500);

let timer;
start.addEventListener("click", function () {
  //   console.log(count.textContent++);
  timer = setInterval(() => {
    // console.log(count.textContent++);
    count.textContent++;
  }, 1000);
  //   setTimeout(() => {
  //     console.log(count.textContent++);
  //   }, 500);
});

stop.addEventListener("click", function () {
  //   console.log(count.textContent++);
  clearInterval(timer);
});

let timeOut = setTimeout(() => {
  console.log("Hello");
}, 2000);

back.addEventListener("click", function () {
  console.log(count.textContent--);
  clearTimeout(timeOut);
});
