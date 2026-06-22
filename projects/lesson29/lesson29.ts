//Interface
interface IPerson {
  firstName: string;
  lastName: string;
  address?: string;
}
function getFullName(person: IPerson) {
  return person.firstName + " " + person.lastName;
}
//Vấn đề: code sẽ dài và khó đọc khi truyền nhiều tham số
let person29 = { firstName: "Thinh", lastName: "Nguyen", address: "Ha Noi" };
console.log(getFullName(person29));
