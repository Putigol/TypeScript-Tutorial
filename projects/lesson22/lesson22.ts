let counter = 0;
while (counter < 10) {
  console.log(counter);
  counter += 1;
}

let counter2 = 3;
while (counter2 < 10) {
  console.log(counter2);
  if (counter2 % 2 === 0) break;
  counter2 += 1;
}
