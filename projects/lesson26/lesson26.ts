//Access Modifier

class Employee {
  readonly birthDate: string;
  private empCode: string;
  empName: string;
  constructor(birthDate: string, empCode: string, empName: string) {
    this.empCode = empCode;
    this.empName = empName;
    this.birthDate = birthDate;
  }
}

class SalesEmployee extends Employee {
  private department: string;
  constructor(
    birthDate: string,
    empCode: string,
    empName: string,
    department: string,
  ) {
    super(birthDate, empCode, empName);
    this.department = department;
  }
}

let emp = new SalesEmployee("10/10/2000", "123", "Thinh", "IT");
console.log(emp);
