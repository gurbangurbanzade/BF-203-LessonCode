class Car {
  // yaradici method
  constructor(model, marka, year) {
    this.model = model;
    this.marka = marka;
    this.year = year;
  }
  getClassInfo() {
    console.log("bu car klasidir");
  }
  getInfo() {
    console.log(
      `masin ${this.model} firmasinin ${this.marka} modelidir. ${this.year} ilde istehsal olunub`
    );
  }

  getAgeCar() {
    console.log(2023 - this.year + " yasi var");
  }

  get age() {
    const d = new Date();
    return d.getFullYear() - this.year;
  }
  getSum() {
    console.log(5 + 5);
  }
}

let car1 = new Car("bmw", "e39", 1997);

// console.log(car1);
// console.log(car1.model);
// console.log(car1.age);
// car1.getClassInfo();
// car1.getSum();

// car1.getInfo();
// // car1.getEngineType();
// car1.getAgeCar();
//...............................................................
class ElectricCar extends Car {
  constructor(model, marka, year, engineType) {
    super(model, marka, year);
    this.engineType = engineType;
  }

  getEngineType() {
    console.log("bu masinin muherriki elektrikdir");
  }

  getClassInfo() {
    super.getClassInfo();
    super.getSum();
    console.log("bu elektrikCar klasidir");
  }
  getSum() {
    console.log(10 + 10);
  }
}

let car2 = new ElectricCar("tesla", "model-X", 2020, "elektrik");

// console.log(car2);
// console.log(car2.model);
// console.log(car2.age);
// car2.getEngineType();
// car2.getAgeCar();
// car2.getClassInfo();
// car2.getSum();

class FuelCar extends Car {
  #vinkod;

  constructor(model, marka, year, engineType, vinkod) {
    super(model, marka, year);
    this.engineType = engineType;
    this.#vinkod = vinkod;
  }
  getVinkod() {
    return this.#vinkod;
  }
  setVinkod(yeniVinkod) {
    this.#vinkod = yeniVinkod;
  }
}
console.log("------------------------------------");
let car3 = new FuelCar("mercedes", "e-class", 2000, "fuel", "123456");
console.log(car3);

console.log(car3.engineType);
car3.engineType = "elektrik";
// car3.vinkod;
car3.setVinkod("abcd");
console.log(car3.getVinkod());
console.log(car3);

// console.log(car2.model);
// console.log(car2.age);
// car2.getEngineType();
// car2.getAgeCar();
// car2.getClassInfo();
// car2.getSum();

class Named {
  constructor(name) {
    this.name = name;
  }

  getname(x) {
    console.log(x);
  }
  getSurname(x) {
    console.log(x);
  }
  getFullName(x, y) {
    console.log(x + " " + y);
  }
}

let name = new Named();

class Person extends Named {}

let insan1 = new Person("qurban");
console.log(insan1.name);
insan1.getFullName("ali", "alizade");
