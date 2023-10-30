// console.log("dasf");
let loginForm = document.querySelector(".loginForm");
let nameInp = document.querySelector(".nameInp");
let passInp = document.querySelector(".passInp");
let base_url = "http://localhost:3000/";
let productBox = document.querySelector(".products");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let newUser = {
    name: nameInp.value,
    password: passInp.value,
  };
  console.log(newUser);
  fetch(base_url + "users")
    .then((res) => res.json())
    .then((data) => {
      let find = false;
      for (element of data) {
        if (
          element.name == newUser.name &&
          element.password == newUser.password
        ) {
          console.log("xos geldiniz");
          find = true;
        }
      }
      if (!find) {
        console.log("sifre ve ya istifadeci adi yalnisdir");
      }
    });
});

fetch(base_url + "products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((element) => {
      productBox.innerHTML += `
<div class="card" style="width: 18rem">
<img src="${element.image}" class="card-img-top" alt="..." />
<div class="card-body">
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">
<button class="btn btn-warning" name="${element.id}">Basket</button>
</li>
<li class="list-group-item">
<button class="btn btn-primary" name="${element.id}">Whislist</button>
</li>
</ul>
</div>
</div>
`;
    });

    let basketBtns = document.querySelectorAll(".btn-warning");
    let arr;

    if (localStorage.getItem("basket")) {
      arr = JSON.parse(localStorage.getItem("basket"));
    } else {
      arr = [];
    }

    for (let btn of basketBtns) {
      btn.addEventListener("click", function () {
        arr.push(this.name);

        console.log(arr);
        localStorage.setItem("basket", JSON.stringify(arr));
      });
    }
  });
