let tbody = document.querySelector(".tbody");
let form = document.querySelector(".sendDataForm");
let company = document.querySelector("#company");
let city = document.querySelector("#city");
let country = document.querySelector("#country");

let url = "https://northwind.vercel.app/api/suppliers/";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // elementleri yaratdiq
    data.forEach((element, i) => {
      tbody.innerHTML += `
<tr class="table-active">
<td>${element.companyName}</td>
<td>${element.address?.city}</td>
<td>${element.address?.country}</td>
<td><button name="${i}"  class="btn btn-warning infoBtn">Info</button></td>
<td><button name="${element.id}" class="btn btn-danger deleteBtn">Delete</button></td>
</tr>
`;
    });
    // end elementleri yaratdiq
    // elementleri ekrandan sildik
    let deleteBtns = document.querySelectorAll(".deleteBtn");
    for (let btn of deleteBtns) {
      btn.addEventListener("click", function () {
        this.parentElement.parentElement.remove();

        console.log(this.name);
        //elementi apiden silmek
        fetch(url + this.name, {
          method: "Delete",
        });
      });
      // end elementleri ekrandan sildik
    }

    // info ucun kodlar
    let infoBtns = document.querySelectorAll(".infoBtn");
    for (let btn of infoBtns) {
      btn.addEventListener("click", function () {
        // console.log(this.name);
        // console.log(this.parentElement.parentElement);
        //elementi apiden silmek
        Swal.fire({
          title: `${data[btn.name].companyName}`,
          text: `${data[btn.name].address?.city}`,
          footer: `${data[btn.name].address?.country}`,
        });
      });
    }
    //end info kodlar
  })

  .catch((err) => console.log(err));

form.addEventListener("submit", function (e) {
  let obj = {
    address: {},
  };
  obj.companyName = company.value;
  obj.address.city = city.value;
  obj.address.country = country.value;
  console.log(obj);

  fetch(url, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.id);

      tbody.innerHTML += `
      <tr class="table-active">
      <td>${company.value}</td>
      <td>${city.value}</td>
      <td>${country.value}</td>
      <td><button  class="btn btn-warning infoBtn">Info</button></td>
      <td><button name="${data.id}" class="btn btn-danger deleteBtn">Delete</button></td>
      </tr>
      `;
      let deleteBtns = document.querySelectorAll(".deleteBtn");
      for (let btn of deleteBtns) {
        btn.addEventListener("click", function () {
          this.parentElement.parentElement.remove();

          console.log(this.name);
          //elementi apiden silmek
          fetch(url + this.name, {
            method: "Delete",
          });
        });
        // end elementleri ekrandan sildik
      }
    });

  e.preventDefault();
});

// id ucun get metodu

// fetch(url + "6")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// put metodu

let obj = {
  //   companyName: "fatime",
  //   address: {
  //     city: "baku",
  //     country: "aze",
  //   },

  telefon: "123456",
};

// fetch(url + "30", {
//   method: "PUT", // or 'PUT'
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(obj),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// Patch
// let obj2 = { contactName: "qurban" };
// fetch(url + "24", {
//   method: "PATCH", // or 'PUT'
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(obj2),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(data);
//   });

let salam = document.querySelector(".salam");
salam.addEventListener("click", function () {});

fetch("http://localhost:3000/posts")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
