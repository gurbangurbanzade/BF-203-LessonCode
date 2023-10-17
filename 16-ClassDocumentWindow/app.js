// console.log(window.document);
// alert("salam");
// document.querySelector();

// console.log("salam");
// console.error("salam");
// console.warn("salam");

// class masin {
//   constructor(marka, model) {
//     this.marka = marka;
//     this.model = model;
//     this.tekerSayi = 4;
//   }
//   getInfo() {
//     return ` bu avtomobil ${this.marka} firmasinin ${this.model} modelidir`;
//   }

//   static getClassInfo() {
//     return `bu klass masinlarin yaradilmasi ucun istifade olunur`;
//   }
// }

// let obj2 = new Object();
// let obj = {
//   name: "qurban",
//   surname: "qurbanzada",
// };

// console.log(obj);

// let masin1 = new masin("bmw", "e39");
// let masin2 = new masin("mercedes", "e class");

// console.log(masin1);
// console.log(masin1.model);
// console.log(masin1.marka);
// console.log(masin1.tekerSayi);

// console.log(masin2);
// console.log(masin1.getInfo());
// console.log(masin2.getInfo());
// // console.log(masin2.getClassInfo());
// console.log(masin.getClassInfo());

class insan {
  static finKod = "xxxxx";
  constructor(ad, soyad, yas, parol) {
    this.ad = ad;
    this.soyad = soyad;
    this.yas = yas;
    this.parol = parol;
  }

  getInfo() {
    return `${this.ad} ${this.soyad} ${this.yas}`;
  }
  static getInfoFull() {
    return `bu info tam mexvidir`;
  }
}

let insan1 = new insan("ferman", "xankisiyev", 19, 123);

insan1.setParol();
// insan1.GetItem()

console.log(insan1.yas);
console.log(insan1.finKod);
console.log(insan.finKod);
console.log(insan1);
console.log(insan1.parol);
insan1.parol = 456;
console.log(insan1);

console.log(insan1.getInfo());
