//Static
class Circle {
  static PI: number = 3.14;
  static calculateCircumArea(diameter: number): number {
    return this.PI * diameter * diameter;
  }
}
//Không cần khởi tạo object vẫn truy cập được thuộc tính static
console.log(Circle.PI);
//Static method chỉ có thể được truy cập bằng class
console.log(Circle.calculateCircumArea(10));
