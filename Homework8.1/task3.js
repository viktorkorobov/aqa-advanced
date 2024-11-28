const initialArray = [10, 20, 30, 40, 50];
 
const sum = initialArray.reduce((previous, current) => previous+current, 0)

console.log(`Сума елементів: ${sum}`);