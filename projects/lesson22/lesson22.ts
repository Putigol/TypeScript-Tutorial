for (let index = 0; index < 9; index++) {
  if (index % 2 === 0) continue;
  console.log(index);
}

//while
let index = -1;
while (index < 9) {
  index++;
  if (index % 2 === 0) continue;
  console.log(index);
}

//do while
let index2 = -1;
do {
  index2++;
  if (index2 % 2 === 0) continue;
  console.log(index2);
} while (index2 < 9);
