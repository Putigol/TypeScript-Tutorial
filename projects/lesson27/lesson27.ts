class Person27 {
  private age: number;
  public firstName: string;
  public lastName: string;
  constructor(age: number, firstName: string, lastName: string) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    if (age < 0 || age > 100) throw new Error("Invalid age");
    this.age = age;
  }
}

let person = new Person27(20, "thinh", "nam");
person.setAge(30);
console.log(person.getAge());
