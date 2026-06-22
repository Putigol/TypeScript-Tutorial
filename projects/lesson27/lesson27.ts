//Inheritance
class Person28 {
  protected firstName: string;
  protected lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  describe(): string {
    return "Hiện đang làm";
  }
}

class Employee28 extends Person28 {
  private jobTitle: string;
  constructor(firstName: string, lastName: string, jobTitle: string) {
    //gọi constructor từ class cha
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }

  //overwrite
  describe(): string {
    return `${super.describe()} ${this.jobTitle}`;
  }
}

let staff = new Employee28("Thinh", "Nguyen", "IT");
console.log(staff.getFullName());
console.log(staff.describe());
