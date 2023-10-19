class Canli {
  // yaradici method
  constructor(name, age, leatherColor) {
    this.name = name;
    this.age = age;
    this.leatherColor = leatherColor;
  }

  get age() {
    const d = new Date();
    return d.getFullYear() - this.year;
  }
}

class Insan extends Canli {
  #finkod;
  constructor(name, age, leatherColor, surname) {
    super(name, age, leatherColor);
    this.surname = surname;
  }
}
class Heyvan extends Canli {
  #genKod;
  constructor(name, age, leatherColor, type) {
    super(name, age, leatherColor);
    this.type = type;
  }
}
class YAdplanetli extends Canli {
  #rocketNumber;
  constructor(name, age, leatherColor, location) {
    super(name, age, leatherColor);
    this.location = location;
  }
}
