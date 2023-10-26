let start = document.querySelector(".startBtn");
let stop = document.querySelector(".stopBtn");
let back = document.querySelector(".backBtn");

let count = document.querySelector(".count");

let check = true;

// let prom = new Promise((resolve, reject) => {
//   if (check) {
//     resolve("Resolve olundu");
//   } else {
//     reject("Reject olundu");
//   }
// });

// prom.then((res) => console.log(res)).cath((err) => console.log(err));
let arr = [];
let box = document.querySelector(".box");

let getUSer = document.querySelector(".getUSer");
let myInput = document.querySelector(".myInput");

getUSer.addEventListener("click", function () {
  console.log(myInput.value);

  fetch(`https://jsonplaceholder.typicode.com/users/${myInput.value}`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
    })
    .catch((err) => console.log(err));
});

// https://restcountries.com/v3.1/all
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    arr = data;

    // console.log(box.innerHTML);

    // fetch("https://jsonplaceholder.typicode.com/users/1")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    // element yaratmaq
    // data.forEach((element) => {
    //   let newCard = `
    //     <div class="card" style="width: 18rem">
    //     <img src="..." class="card-img-top" alt="..." />
    //     <div class="card-body">
    //       <h5 class="card-title">${element.name}</h5>
    //       <p class="card-text">
    //        ${element.phone}
    //       </p>
    //       <a href="#" class="btn btn-primary"> ${element.website}</a>

    //     </div>
    //   </div>`;
    //   box.innerHTML += newCard;
    //   console.log(element);
    //   console.log(element.id);
    //   console.log(element.name + " " + element.email);
    // });
    // element yaratmaq bitdi
  });

// arr.forEach((element) => {
//   console.log(element);
// });
let searchBtn = document.querySelector(".searchBtn");
let searchInp = document.querySelector(".searchInp");

async function getData() {
  res = await fetch("https://restcountries.com/v3.1/all");
  let data = await res.json();

  //   let data = res;
  console.log(data[1]);

  data.forEach((elem, i) => {
    // console.log(elem.name.common);

    if (elem.name.common == "Afghanistan") {
      console.log(i);
    }
    let newCard = `   
 <div class="card" style="width: 18rem">
 <img src="${elem.flags.png}" class="card-img-top" alt="..." />
 <div class="card-body">
   <ul class="list-group list-group-flush">
     <li class="list-group-item">Name - <b>${elem.name.common}</b></li>
     <li class="list-group-item">Capital - ${elem.capital} </li>
     <li class="list-group-item">Population - ${elem.population} </li>
     <li class="list-group-item">Population - ${i} </li>
   </ul>
 </div>
</div>`;
    box.innerHTML += newCard;
  });

  // btn ile axtaranda
  searchBtn.addEventListener("click", function () {
    console.log(searchInp.value);
    box.innerHTML = "";
    data.forEach((elem) => {
      if (elem.name.common.toLowerCase().includes(searchInp.value)) {
        console.log(elem.name.common);
        let newCard = `   
        <div class="card" style="width: 18rem">
        <img src="${elem.flags.png}" class="card-img-top" alt="..." />
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Name - <b>${elem.name.common}</b></li>
            <li class="list-group-item">Capital - ${elem.capital} </li>
            <li class="list-group-item">Population - ${elem.population} </li>
          
          </ul>
        </div>
       </div>`;
        box.innerHTML += newCard;
      }
    });
  });
  // inputun her herfinde axtaranda
  searchInp.addEventListener("input", function () {
    console.log(searchInp.value);
    box.innerHTML = "";
    data.forEach((elem) => {
      if (elem.name.common.toLowerCase().includes(searchInp.value)) {
        console.log(elem.name.common);
        let newCard = `   
        <div class="card" style="width: 18rem">
        <img src="${elem.flags.png}" class="card-img-top" alt="..." />
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Name - <b>${elem.name.common}</b></li>
            <li class="list-group-item">Capital - ${elem.capital} </li>
            <li class="list-group-item">Population - ${elem.population} </li>
          
          </ul>
        </div>
       </div>`;
        box.innerHTML += newCard;
      }
    });
  });
}
getData();
