let productBox = document.querySelector(".products");
console.log();

fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => {
    let arr = JSON.parse(localStorage.getItem("basket"));
    console.log(arr);
    console.log(data);
    data.forEach((element) => {
      arr.forEach((id) => {
        if (element.id == id) {
          productBox.innerHTML += `
<div class="card" style="width: 18rem">
<img src="${element.image}" class="card-img-top" alt="..." />
<div class="card-body">
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">
<button class="btn btn-danger" name="${element.id}">Delete</button>
</li>
<li class="list-group-item">
<button class="btn btn-primary" name="${element.id}">Whislist</button>
</li>
</ul>
</div>
</div>
`;
        }
      });
    });
  });
