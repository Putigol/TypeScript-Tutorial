//Access Modifier

class Employee {
  private empCode: string;
  empName: string;
  constructor(empCode: string, empName: string) {
    this.empCode = empCode;
    this.empName = empName;
  }
}

let emp = new Employee("1", "thinh");
console.log(emp);
