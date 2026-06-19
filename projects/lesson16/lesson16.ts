const sum = (a: number, b: number): number => {
  return a + b;
};

// void: khong return gi ca
const handleLogs = (message: string): void => {
  console.log(message);
};

console.log(sum(1, 2));
console.log(handleLogs("Void không trả về gì cả"));
