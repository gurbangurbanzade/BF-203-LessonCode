var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("oop");
var Car = /** @class */ (function () {
    function Car(marka, model) {
        this.marka = marka;
        this.model = model;
        Car.carCount++;
        console.log("Yaradilan masin sayi- " + Car.carCount);
    }
    Object.defineProperty(Car.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            if (value > 2000) {
                this._year = value;
            }
            else {
                alert("masinin ili kohnedir");
                this._year = 0;
            }
            // return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this.engineType;
        },
        set: function (value) {
            this.engineType = value;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.getInfo = function () {
        console.log("masinin markasi- ", this.marka + " modeli ise - ", this.model);
    };
    Car.carCount = 0;
    return Car;
}());
var masin1 = new Car("bmw", "e39");
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
var ElectroCar = /** @class */ (function (_super) {
    __extends(ElectroCar, _super);
    function ElectroCar(marka, model, electricMotor) {
        var _this = _super.call(this, marka, model) || this;
        _this.electricMotor = electricMotor;
        return _this;
    }
    ElectroCar.prototype.getInfo = function () {
        console.log("masinin markasi- ", this.marka + " modeli ise - ", this.model);
        console.log("bu masin elektrik muherrikine sahibdir");
    };
    ElectroCar.prototype.getPrivateKey = function () {
        console.log(this.marka);
    };
    ElectroCar.prototype.getProtectedKey = function () {
        console.log(this.engineType);
    };
    return ElectroCar;
}(Car));
var masin2 = new ElectroCar("tesla", "model 3", true);
console.log("masin 2", masin2);
masin2.getInfo();
console.log("protected burada");
masin2.engine = "electric";
masin2.getProtectedKey();
var masin3 = new ElectroCar("tesla", "model Y", true);
var masin4 = new ElectroCar("tesla", "model S", true);
var Canli = /** @class */ (function () {
    function Canli(type) {
        this.type = type;
    }
    Canli.prototype.getInfo = function () {
        console.log("bu klas abstrackt klasindan miras alib");
    };
    return Canli;
}());
var Baliq = /** @class */ (function (_super) {
    __extends(Baliq, _super);
    function Baliq(type, name) {
        var _this = _super.call(this, type) || this;
        _this.fatherName = "marlin";
        _this.name = name;
        return _this;
    }
    Baliq.prototype.getDetail = function () {
        console.log("Bu baliq klasidir");
    };
    return Baliq;
}(Canli));
var nemo = new Baliq("baliq", "nemo");
console.log(nemo);
nemo.getDetail();
nemo.getInfo();
// nemo.fatherName = "qurban";
console.log(nemo.fatherName);
var person = {
    surname: "qurbanzadada",
    name: "qurban",
};
var Animal = /** @class */ (function () {
    function Animal(type, name) {
        this.type = type;
        this.name = name;
    }
    return Animal;
}());
var lion = new Animal("cat", "sinba");
console.log(lion);
var cat = {
    age: 3,
    type: "cat",
    name: "garfield",
};
console.log(cat);
var obj5 = {
    name: "qurban",
    age: 12,
};
