const  numbersList1 = [1,10,14,2,4,5,43,34];
console.log(`Original array: ${numbersList1}`);

const  numbersList2 = [...numbersList1].sort((a, b) => a-b);

console.log(`Sort array: ${numbersList2}`);
