console.log("salam");
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.isCreditAllowed = function () {
        // ...
        return true;
    };
    return Customer;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        // ...
        return true;
    };
    return Supplier;
}());
var abc = new Customer();
var def = new Supplier();
function signContract(partner) {
    var message = "salam";
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? "customer" : "Credit issue";
    }
    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? "supplier" : "Need to evaluate further";
    }
    return message;
}
console.log(signContract(abc));
console.log(signContract(def));
