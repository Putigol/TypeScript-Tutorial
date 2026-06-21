// Function Overloading
function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b: any) {
  return a + b;
}

console.log(addNew(1, 2));
console.log(addNew("1", "2"));

//For class
class Counter {
  private current: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values: number[] = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      return values;
    }
    return ++this.current;
  }
}

let counter = new Counter();
console.log(counter.count());
console.log(counter.count(10));
