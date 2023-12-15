console.log("oop");

class Car {
  static carCount: number = 0;
  marka: string;
  model: string;
  private _year!: number;
  protected engineType!: string;

  constructor(marka: string, model: string) {
    this.marka = marka;
    this.model = model;

    Car.carCount++;

    console.log("Yaradilan masin sayi- " + Car.carCount);
  }

  public get year() {
    return this._year;
  }
  public set year(value: number) {
    if (value > 2000) {
      this._year = value;
    } else {
      alert("masinin ili kohnedir");
      this._year = 0;
    }

    // return this._year;
  }

  public get engine() {
    return this.engineType;
  }
  public set engine(value: string) {
    this.engineType = value;
  }
  getInfo() {
    console.log("masinin markasi- ", this.marka + " modeli ise - ", this.model);
  }
}

let masin1 = new Car("bmw", "e39");
console.log(masin1);
console.log(masin1.marka);

// masin1.marka = "mercedes";
// masin1.year = 2008;
// console.log(masin1);
// console.log("masin1.year", masin1.year);
masin1.year = 2008;
console.log(masin1);
masin1.engine = "fuel";
console.log("masin1.engine", masin1.engine);

masin1.getInfo();
// miras alinan class

class ElectroCar extends Car {
  electricMotor: boolean;
  constructor(marka: string, model: string, electricMotor: boolean) {
    super(marka, model);
    this.electricMotor = electricMotor;
  }
  getInfo() {
    console.log("masinin markasi- ", this.marka + " modeli ise - ", this.model);
    console.log("bu masin elektrik muherrikine sahibdir");
  }
  getPrivateKey() {
    console.log(this.marka);
  }
  getProtectedKey() {
    console.log(this.engineType);
  }
}

const masin2 = new ElectroCar("tesla", "model 3", true);
console.log("masin 2", masin2);
masin2.getInfo();
console.log("protected burada");
masin2.engine = "electric";
masin2.getProtectedKey();

const masin3 = new ElectroCar("tesla", "model Y", true);
const masin4 = new ElectroCar("tesla", "model S", true);

abstract class Canli {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  abstract getDetail(): void;

  getInfo() {
    console.log("bu klas abstrackt klasindan miras alib");
  }
}

class Baliq extends Canli {
  readonly fatherName: string = "marlin";
  name: string;

  constructor(type: string, name: string) {
    super(type);
    this.name = name;
  }

  getDetail() {
    console.log("Bu baliq klasidir");
  }
}

let nemo = new Baliq("baliq", "nemo");

console.log(nemo);
nemo.getDetail();
nemo.getInfo();
// nemo.fatherName = "qurban";
console.log(nemo.fatherName);

// oop bitdi

// interface basladi

interface A {
  name: string;
}

interface B extends A {
  surname: string;
}

let person: B = {
  surname: "qurbanzadada",
  name: "qurban",
};

class Animal implements A {
  type: string;
  name;

  constructor(type: string, name: string) {
    this.type = type;
    this.name = name;
  }
}

let lion = new Animal("cat", "sinba");

console.log(lion);

interface C extends Animal {
  age: number;
}

let cat: C = {
  age: 3,
  type: "cat",
  name: "garfield",
};

console.log(cat);

interface D {
  //   name: string;
  age: number;
}
interface D {
  name: string;
}

let obj5: D = {
  name: "qurban",
  age: 12,
};
