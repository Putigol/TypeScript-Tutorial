//Access Modifier

class Employee {
  public empCode: string;
  empName: string;
  constructor(empCode: string, empName: string) {
    this.empCode = empCode;
    this.empName = empName;
  }
}

let emp = new Employee("1", "thinh");
console.log(emp);
emp.empCode = "2";
emp.empName = "Nam";
console.log(emp);
