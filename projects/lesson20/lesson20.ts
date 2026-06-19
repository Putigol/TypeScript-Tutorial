let age: number = 20;
if (age > 17) {
  console.log("You can drive");
} else {
  console.log("You can't drive");
}

let itemCount = 15;
let discount: number;
if (itemCount > 5 && itemCount <= 10) {
  discount = 5;
} else if (itemCount > 10 && itemCount <= 15) {
  discount = 10;
} else {
  discount = 15;
}

console.log(`You get a discount of ${discount}%`);
