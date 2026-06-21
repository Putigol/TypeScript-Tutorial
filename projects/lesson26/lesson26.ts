//Access Modifier

class Employee {
  private empCode: string;
  empName: string;
  constructor(empCode: string, empName: string) {
    this.empCode = empCode;
    this.empName = empName;
  }
}

class SalesEmployee extends Employee {
  private department: string;
  constructor(empCode: string, empName: string, department: string) {
    super(empCode, empName);
    this.department = department;
  }
}

let emp = new SalesEmployee("123", "Thinh", "IT");
console.log(emp);
