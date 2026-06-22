//Abstract class
abstract class Employee28 {
  constructor(
    private firstName: string,
    private lastName: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //abstract method
  abstract getSalary(): number;

  //normal method
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
  compensationStatement(): string {
    return `${this.getFullName()} makes ${this.getSalary()} a month.`;
  }
}

//Không thể khởi tạo đối tượng từ abstract class
class FullTimeEmployee extends Employee28 {
  constructor(
    firstName: string,
    lastName: string,
    private salary: number,
  ) {
    super(firstName, lastName);
    this.salary = salary;
  }
  getSalary(): number {
    return this.salary;
  }
}

class Constructor extends Employee28 {
  constructor(
    firstName: string,
    lastName: string,
    private hourlyRate: number,
    private hoursWorked: number,
  ) {
    super(firstName, lastName);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }
  getSalary(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}
const staffFT = new FullTimeEmployee("Thinh", "Nguyen", 1000);
const staffCTT = new Constructor("Thinh", "Nguyen", 10, 100);
console.log(staffCTT.compensationStatement());
console.log(staffCTT.getSalary());
console.log(staffFT.compensationStatement());
console.log(staffFT.getSalary());
