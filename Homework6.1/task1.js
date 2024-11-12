
function squareArea1(width, height) {
    return width*height;
}

const squareArea2 = function (width, height) {
   return width*height;
}

const squareArea3 = (width, height) => width * height;

console.log("Area (Function Declaration):", squareArea1(5, 10));
console.log("Area (Function Expression):", squareArea2(5, 10));
console.log("Area (Arrow Function):", squareArea3(5, 10));
