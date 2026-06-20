//Rest Parameter
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((number) => {
    total += number;
  });
  return total;
}

console.log(getTotal());

//Để mảng ở tham số cuối cùng
function getMutiply(base: number, ...m: number[]) {
  return m.map((x) => base * x);
}

function getMinus(base: number, ...m: number[]) {
  let result = m.map((x) => {
    console.log("x= ", x);
    return base - x;
  });
  return m.map((x) => base - x);
}

console.log(getMutiply(2, 1, 2, 3));
console.log(getMinus(2, 1, 2, 3));

//String
function getFullName(action: string, ...names: string[]) {
  return action + " " + names.join(", ") + "!";
}

console.log(getFullName("hello", "nam", "thanh"));
