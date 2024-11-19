function evenNumber() {
    console.log(`number is even`);
    
}
function oddNumber() {
    console.log(`number is odd`);
}

function handleNum (number,evenNumber,oddNumber) {
if (number%2==0) {
    evenNumber();
}else oddNumber();
}


handleNum(5,evenNumber,oddNumber);
handleNum(6,evenNumber,oddNumber);