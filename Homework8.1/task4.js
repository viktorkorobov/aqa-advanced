const initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
const par = initialArray.filter(number => number % 2 ===0);

console.log(`Парні числа: ${par}`);