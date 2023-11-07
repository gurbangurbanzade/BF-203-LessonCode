let list = document.querySelector(".list");
let spinner = document.querySelector(".spinner");

fetch("https://northwind.vercel.app/api/products")
  .then((res) => {
    if (false) {
      throw new Error("datalari vermirem");
    }

    return res.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      list.innerHTML += `
      <li>${element.name}</li>s
        
        `;
    });
  })
  .catch((err) => {
    list.innerHTML = err;
  })
  .finally(() => {
    spinner.classList.add("none");
  });

try {
} catch (error) {
} finally {
}

function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
window.addEventListener("load", addDarkmodeWidget);
