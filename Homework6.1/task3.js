function checkOrder (available, ordered ) {
    switch (true) {
        case (available<ordered):
            return `“Your order is too large, we don’t have enough goods.”`;
            break;
        case (ordered==0): 
            return `“Your order is empty.”`;
            break;
        default:
            return `“Your order is accepted”`;
    }
}

console.log(checkOrder(20, 25)); // "Your order is too large, we don’t have enough goods."
console.log(checkOrder(20, 0));  // "Your order is empty"
console.log(checkOrder(20, 15)); // "Your order is accepted"