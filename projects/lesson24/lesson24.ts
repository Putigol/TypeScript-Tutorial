//Optional Parameters
const sum5 = (x: number, y: number, z?: number): number => {
  if (z) {
    return x + y + z;
  }
  return x + y;
};

console.log(sum5(1, 2, 3));
console.log(sum5(1, 2));
