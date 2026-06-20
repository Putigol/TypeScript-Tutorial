//Default Parameters
const sum24 = (soA: number, soB: boolean = false, soC: number) => {
  if (soB === false) {
    return soA + soC;
  }
  if (soB) {
    return soA - soC;
  }
};
console.log(sum24(1, true, 2));
