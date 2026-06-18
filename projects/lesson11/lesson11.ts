let mine: { name: string; age: number } = { name: "thinh", age: 20 };
console.log(mine);

//Code sạch hơn với interface
interface Person {
  name: string;
  age: number;
}
let person: Person = { name: "thinh", age: 20 };
console.log(person);
