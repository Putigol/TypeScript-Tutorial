let products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 800 },
];

for (let i = 0; i < products.length; i++) {
  if (products[i].price > 500) {
    console.log(products[i].name);
    break;
    console.log(products[i]);
  }
}

let discount = 0;
let product = products[1];
switch (product.name) {
  case "Laptop":
    discount = 5;
    break;
  case "Phone":
    discount = 10;
    break;
  case "Tablet":
    discount = 15;
    break;
  default:
    discount = 0;
    break;
}

console.log(`You get a discount of ${discount}% for ${product.name}`);
