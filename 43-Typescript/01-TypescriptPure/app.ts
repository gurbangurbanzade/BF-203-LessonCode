console.log("salam");

class Customer {
  isCreditAllowed(): boolean {
    // ...
    return true;
  }
}

class Supplier {
  isInShortList(): boolean {
    // ...
    return true;
  }
}

let abc = new Customer();
let def = new Supplier();

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
  let message: string = "salam";
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
