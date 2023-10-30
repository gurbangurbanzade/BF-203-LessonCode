let signInForm = document.querySelector(".signInForm");
let signInp = document.querySelector(".signInp");
let signPass = document.querySelector(".signPas");
let base_url = "http://localhost:3000/users";

signInForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let newUser = {
    name: signInp.value,
    password: signPass.value,
  };

  fetch(base_url, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  document.location.href = "index.html";
});
