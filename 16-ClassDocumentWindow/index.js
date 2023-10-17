// let data = [
//   {
//     iso: 1,
//     country: "as",
//     cities: ["asd", "asd", "asd", "asd", "asd", "asd"],
//   },
//   {
//     iso: 1,
//     country: "asd",
//     cities: ["asd", "asd", "asd", "asd", "asd", "asd"],
//   },
//   {
//     iso: 1,
//     country: "sas",
//     cities: ["asd", "asd", "asd", "asd", "asd", "asd"],
//   },
//   {
//     iso: 1,
//     country: "fas",
//     cities: ["asd", "asd", "asd", "asd", "asd", "asd"],
//   },
//   {
//     iso: 1,
//     country: "gas",
//     cities: ["asd", "asd", "asd", "asd", "asd", "asd"],
//   },
//   {
//     iso: 1,
//     country: "gas",
//     cities: ["asd", "asd", "asd", "asd", "asd", "asd"],
//   },
// ];

// function getName(arr) {
//     let count=0;
//   // const country=data.map(x=>x.country)

//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// if(arr[i].country[0]== deyisnAdi)
// coun++
//   }

//   return [a,count]
// }

// getName(data);

// {
//     a:8,
//     b:3,
//     c:2
// }

let arr = ["Istanbul", "Baku", "london", "Kopenhagen", "Barcelona"];

function search(arr) {
  let word = prompt("seheri daxil edin");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toUpperCase().includes(word.toUpperCase())) {
      console.log(arr[i]);
      break;
    }
  }
}
search(arr);
